/**
 * Unlicensed code created by A Softer Space, 2019
 * www.asofterspace.com/licenses/unlicense.txt
 *
 * Inspired by an exercise for a university course
 * on game development by Patrick Kerr at the
 * University of Iceland in 2013 - thanks, Patrick! :)
 */

"use strict";

// Here we throw in some canvas-fu to get everything scaled nicely
var global_canvas = document.getElementById("wallbreakCanvas");
var global_ctx = global_canvas.getContext("2d");
var global_real_width = window.innerWidth;
var global_real_height = window.innerHeight;
var global_canvas_left = 8;
var global_canvas_top = 8;
var global_canvas_right = 409;
var global_canvas_bottom = 409;
global_ctx.canvas.width = global_real_width;
global_ctx.canvas.height = global_real_height;
var global_gameover = false;

var global_launched = false;

// This variable tells us in which section of the game we are.
// It changes the behavior of the system quite radically!
// 0 .. TWO PADDLES
// 1 .. Rotating TWO PADDLES into WALLBREAK B/W orientation
// 2 .. Fading out the TWO PADDLES leftovers
// 3 .. Fading in the WALLBREAK B/W stuff
// 4 .. WALLBREAK B/W
// 5 .. Animation of breaking through the floor etc.
// 6 .. WALLBREAK :: Level 2
// 7 .. WALLBREAK :: Level 3
var global_runmode = 0;

var DEFAULT_INTERVAL = 15;

var HELP_KEY = 'H'.charCodeAt(0);
var CHEAT_KEY = 'X'.charCodeAt(0);
var KEY_PAUSE = 'P'.charCodeAt(0);
var KEY_STEP  = 'O'.charCodeAt(0);
var KEY_W = 'W'.charCodeAt(0);
var KEY_S = 'S'.charCodeAt(0);
var KEY_A = 'A'.charCodeAt(0);
var KEY_D = 'D'.charCodeAt(0);
var KEY_I = 'I'.charCodeAt(0);
var KEY_K = 'K'.charCodeAt(0);
var KEY_J = 'J'.charCodeAt(0);
var KEY_L = 'L'.charCodeAt(0);
var KEY_LEFT = 37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_SPACE = ' '.charCodeAt(0);


// MAINLOOP

var global_main = {
	_lastFrameTime: null,
	_isUpdatePaused: false,
};

global_main.step = function(frameTime) {

	var dt = frameTime - this._lastFrameTime;

	this.gatherInputs();

	this.update(dt);

	this.render(global_ctx);

	this._lastFrameTime = frameTime;

	this._requestNextIteration();
};

global_main._requestNextIteration = function() {
	window.requestAnimationFrame(global_main.stepInGlobalContext);
};

global_main.stepInGlobalContext = function(frameTime) {
	global_main.step(frameTime);
}

global_main.gatherInputs = function() {
	// We only need to consider one special key: H for help.
	// All the others are handled somewhere else.
	if (keyHasBeenPressed(HELP_KEY)) {
		var paddle1text = "";
		var paddle2text = "";
		var spacetext = "";

		if (global_runmode === 0) {
			paddle1text = "[ W ] [ UP ] paddle 1 up, [ S ] [ DOWN ] paddle 1 down\n";
			paddle2text = "[ I ] paddle 2 up, [ K ] paddle 2 down\n";
		} else if (global_runmode === 1) {
			paddle1text = "[ W ] [ A ] [ UP ] [ LEFT ] paddle 1 up, " +
						  "[ S ] [ D ] [ RIGHT ] [ DOWN ] paddle 1 down\n";
			paddle2text = "[ I ] [ J ] paddle 2 up, [ K ] [ L ] paddle 2 down\n";
		} else if (global_runmode === 2) {
			paddle1text = "[ A ] [ W ] [ LEFT ] [ UP ] paddle 1 left, " +
						  "[ D ] [ S ] [ RIGHT ] [ DOWN ] paddle 1 right\n";
			paddle2text = "[ J ] [ I ] paddle 2 left, [ L ] [ K ] paddle 2 right\n";
		} else {
			paddle1text = "[ A ] [ LEFT ] paddle left, [ D ] [ RIGHT ] paddle right\n";
		}

		if (global_runmode > 2) {
			spacetext = "[ SPACE ] launch the ball from the paddle\n";
		}

		alert("Right now, you can use the following keys ingame:\n\n" +
			  paddle1text +
			  paddle2text +
			  spacetext +
			  "[ H ] display help\n\n" +
			  "To control the game state itself, you can use:\n" +
			  "[ P ] toggle pause, [ O ] step ahead one step\n" +
			  "[ X ] jump to next event");
	}

	if (keyHasBeenPressed(CHEAT_KEY)) {
		set_runmode(global_runmode + 1);
	}
}

global_main.update = function(dt) {

	if (this.skipThisUpdate()) {
		return;
	}

	// if the delta time is unrealistically large...
	if (dt > 10 * DEFAULT_INTERVAL) {
		// ... then make it a bit more realistic!
		dt = DEFAULT_INTERVAL;
	}

	// we are scaling the time a bit before we everything on it
	var du = (dt / DEFAULT_INTERVAL);

	global_field.update(du);
	global_score.update(du);
	global_messages.update(du);

	// We want to update the bricks before the ball,
	// such that we can erase the cleared bricks
	// from last turn.
	global_bricks.update(du);
	global_walls.update(du);
	global_ball.update(du);

	global_paddle1.update(du);
	if (global_runmode < 2) {
		global_paddle2.updateFixed(global_ball.getY());
	}

	global_sprites.update(du);
}

global_main.skipThisUpdate = function() {

	if (keyHasBeenPressed(KEY_PAUSE)) {
		global_main._isUpdatePaused = !global_main._isUpdatePaused;
	}

	return global_main._isUpdatePaused && !keyHasBeenPressed(KEY_STEP);
}

global_main.render = function(ctx) {

	ctx.save();

	if (!(global_field.rotation === 0)) {
		ctx.translate(((global_canvas_right - global_canvas_left) / 2) + global_canvas_left,
					  ((global_canvas_bottom - global_canvas_top) / 2) + global_canvas_top);
		ctx.rotate(global_field.rotation);
		ctx.translate(- ((global_canvas_right - global_canvas_left) / 2) - global_canvas_left,
					  - ((global_canvas_bottom - global_canvas_top) / 2) - global_canvas_top);
	}

	ctx.fillStyle = "#000000";


	global_field.render(ctx);

	// We render the bricks before we render the score,
	// as they overpaint the area where the score is
	// - at least in runmode 4.
	global_bricks.render(ctx);

	global_messages.render(ctx);
	global_score.render(ctx);
	global_sprites.render(ctx);

	global_paddle1.render(ctx);
	global_paddle2.render(ctx);

	global_walls.render(ctx);

	global_ball.render(ctx);


	if (global_runmode < 5) {
		// We draw white over everything that shouldn't be full of stuff just yet.
		// And yes, we draw a lot further than what can actually displayed,
		// because we'll also rotate, and you never know...
		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(-global_real_width, -global_real_height,
					 global_real_width * 2, global_canvas_top + global_real_height);
		ctx.fillRect(-global_real_width, -global_real_height,
					 global_canvas_left + global_real_width, global_real_height * 2);
		ctx.fillRect(global_canvas_right, -global_real_height,
					 global_real_width, global_real_height * 2);
		ctx.fillRect(-global_real_width, global_canvas_bottom,
					 global_real_width * 2, global_real_height);
	}
	if (global_runmode < 6) {
		ctx.strokeWidth = 1;
		ctx.strokeStyle = "#000000";
		ctx.strokeRect(global_canvas_left + 0.5, global_canvas_top + 0.5,
					   global_canvas_right - global_canvas_left,
					   global_canvas_bottom - global_canvas_top);
	}

	ctx.restore();
}


// PADDLE

function Paddle(descr) {
	for (var property in descr) {
		this[property] = descr[property];
	}
}

Paddle.prototype.halfWidth = 10;
Paddle.prototype.halfHeight = 50;
Paddle.prototype.color = "#000000";
Paddle.prototype.visible = true;
Paddle.prototype.shootLasers = false;
Paddle.prototype.alwaysSticky = false;
Paddle.prototype.velX = 7;
// 0 .. box
// 1 .. box with rounded corners
Paddle.prototype.style = 0;

Paddle.prototype.update = function(du) {

	if (!this.visible || global_gameover) {
		return;
	}

	var PAD_UP = global_main.keys[this.GO_UP] || global_main.keys[this.GO_UP2];
	var PAD_DOWN = global_main.keys[this.GO_DOWN] || global_main.keys[this.GO_DOWN2];
	var PAD_LEFT = global_main.keys[this.GO_LEFT] || global_main.keys[this.GO_LEFT2];
	var PAD_RIGHT = global_main.keys[this.GO_RIGHT] || global_main.keys[this.GO_RIGHT2];

	if (PAD_LEFT || PAD_RIGHT) {
		global_ADpressed = true;
	}

	if (global_runmode === 0) {
		if (PAD_UP || PAD_LEFT) {
			this.cy = max(this.cy - 5 * du, global_canvas_top + this.halfHeight);
		}
		if (PAD_DOWN || PAD_RIGHT) {
			this.cy = min(this.cy + 5 * du, global_canvas_bottom - this.halfHeight);
		}
	} else if (global_runmode === 1) {
		if (PAD_UP || PAD_LEFT) {
			this.cy = max(this.cy - 5 * du, global_canvas_top + this.halfHeight);
		}
		if (PAD_DOWN || PAD_RIGHT) {
			this.cy = min(this.cy + 5 * du, global_canvas_bottom - this.halfHeight);
		}
	} else if (global_runmode === 2) {
		if (PAD_LEFT || PAD_UP) {
			this.cx = max(this.cx - 5 * du, global_canvas_left + this.halfWidth);
		}
		if (PAD_RIGHT || PAD_DOWN) {
			this.cx = min(this.cx + 5 * du, global_canvas_right - this.halfWidth);
		}
	} else if ((global_runmode > 2) && (global_runmode < 5)) {
		if (PAD_LEFT || PAD_UP) {
			this.cx = max(this.cx - 5 * du, global_walls.leftinneredge + this.halfWidth);
		}
		if (PAD_RIGHT || PAD_DOWN) {
			this.cx = min(this.cx + 5 * du, global_walls.rightinneredge - this.halfWidth);
		}
	} else if (global_runmode > 4) {
		if (PAD_LEFT || PAD_UP) {
			this.cx = max(this.cx - this.velX * du, global_walls.leftinneredge + this.halfWidth);
		}
		if (PAD_RIGHT || PAD_DOWN) {
			this.cx = min(this.cx + this.velX * du, global_walls.rightinneredge - this.halfWidth);
		}
	}

	if (global_runmode === 5) {
		this.cy = min(this.cy + 5 * du, global_real_height - (this.halfHeight + 20));
	}
};

Paddle.prototype.updateFixed = function(newCy) {
	if (global_runmode < 2) {
		this.cy = newCy;
	} else {
		this.cx = newCy;
	}
};

Paddle.prototype.turn = function() {
	var i = this.cy;
	this.cy = 9 + global_canvas_right - this.cx;
	this.cx = i;

	i = this.halfWidth;
	this.halfWidth = this.halfHeight;
	this.halfHeight = i;
}

Paddle.prototype.render = function(ctx) {
	// You cannot render an invisible paddle.
	if (!this.visible) return;

	ctx.fillStyle = this.color;

	// (cx, cy) is the centre; must offset it for drawing
	ctx.fillRect(this.cx - this.halfWidth,
				 this.cy - this.halfHeight,
				 this.halfWidth * 2,
				 this.halfHeight * 2);

	if (this.style === 1) {
		ctx.beginPath();
		ctx.arc(this.cx - this.halfWidth, this.cy,
				this.halfHeight, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
		ctx.beginPath();
		ctx.arc(this.cx + this.halfWidth, this.cy,
				this.halfHeight, 0, 2*Math.PI);
		ctx.closePath();
		ctx.fill();
	}
};

Paddle.prototype.collidesHorz = function(prevX, prevY,
									   nextX, nextY, r) {
	// You cannot collide with an invisible paddle.
	if (!this.visible) return false;

	var paddleEdge = this.cx;
	// Check X coords
	if ((nextX - r < paddleEdge && prevX - r >= paddleEdge) ||
		(nextX + r > paddleEdge && prevX + r <= paddleEdge)) {
		// Check Y coords
		if (nextY + r >= this.cy - this.halfHeight &&
			nextY - r <= this.cy + this.halfHeight) {
			// It's a hit!
			return true;
		}
	}
	// It's a miss!
	return false;
};

Paddle.prototype.collidesVert = function(prevX, prevY,
									   nextX, nextY, r) {
	// You cannot collide with an invisible paddle.
	if (!this.visible) return false;

	var paddleEdge = this.cy;
	// Check Y coords
	if ((nextY - r < paddleEdge && prevY - r >= paddleEdge) ||
		(nextY + r > paddleEdge && prevY + r <= paddleEdge)) {
		// Check Y coords
		if (nextX + r >= this.cx - this.halfWidth &&
			nextX - r <= this.cx + this.halfWidth) {
			// It's a hit!
			return true;
		}
	}
	// It's a miss!
	return false;
};

// Upgrade-thingies also collide with paddles
Paddle.prototype.upCollidesVert = function(prevX, prevY,
									   nextX, nextY, w, h) {
	// You cannot collide with an invisible paddle.
	if (!this.visible) return false;

	var paddleEdge = this.cy;
	// Check Y coords
	if ((nextY - h < paddleEdge && prevY - h >= paddleEdge) ||
		(nextY + h > paddleEdge && prevY + h <= paddleEdge)) {
		// Check Y coords
		if (nextX + w >= this.cx - this.halfWidth &&
			nextX - w <= this.cx + this.halfWidth) {
			// It's a hit!
			return true;
		}
	}
	// It's a miss!
	return false;
};


// PADDLE 1

var global_paddle1 = new Paddle({
	cx : 38,
	cy : 100,
	rotation : 0,

	GO_UP	 : KEY_W,
	GO_DOWN   : KEY_S,
	GO_LEFT   : KEY_A,
	GO_RIGHT  : KEY_D,
	GO_UP2	: KEY_UP,
	GO_DOWN2  : KEY_DOWN,
	GO_LEFT2  : KEY_LEFT,
	GO_RIGHT2 : KEY_RIGHT
});


// PADDLE 2

var global_paddle2 = new Paddle({
	cx : 378,
	cy : 300,
	rotation : 0,

	GO_UP	 : KEY_I,
	GO_DOWN   : KEY_K,
	GO_LEFT   : KEY_J,
	GO_RIGHT  : KEY_L,
	GO_UP2	: KEY_I,
	GO_DOWN2  : KEY_K,
	GO_LEFT2  : KEY_J,
	GO_RIGHT2 : KEY_L
});


// BALL

var global_ball = {
	cx: 50,
	cy: 200,
	radius: 10,
	color: "#000000",
	sticktopaddle: false, // true after resetting
	meteor: false, // upgrade to meteor mode

	xVel: 5,
	yVel: 4
};

global_ball.update = function(du) {
	// launch the ball!
	if (keyHasBeenPressed(KEY_SPACE)) {
		if (global_gameover) return;
		if (this.sticktopaddle) {
			this.sticktopaddle = false;
			global_launched = true;
		}
	}

	if (this.sticktopaddle) {
		// We want to do this even if global_gameover is true.
		this._updateSticky();
	} else {
		this._updateNormal(du);
	}
}

global_ball._updateSticky = function() {
	this.cy = global_paddle1.cy - (global_paddle1.halfHeight + (this.radius * 0.8));
	this.cx = global_paddle1.cx;
}

global_ball._updateNormal = function(du) {
	// Remember my previous position
	var prevX = this.cx;
	var prevY = this.cy;

	// Compute my provisional new position (barring collisions)
	var nextX = prevX + this.xVel * du;
	var nextY = prevY + this.yVel * du;

	// Bounce off the paddles
	if (global_runmode < 2) {
		// Horizontal bounceing from vertical paddles
		if (global_paddle1.collidesHorz(prevX, prevY, nextX, nextY, this.radius) ||
			global_paddle2.collidesHorz(prevX, prevY, nextX, nextY, this.radius))
		{
			this.xVel *= -1;

			// We update nextX accordingly.
			nextX = prevX + this.xVel * du;
		}
	} else {
		// Vertical bounceing from horizontal paddles
		if (global_paddle1.collidesVert(prevX, prevY, nextX, nextY, this.radius) ||
			global_paddle2.collidesVert(prevX, prevY, nextX, nextY, this.radius))
		{
			if (global_paddle1.alwaysSticky) {
				this.yVel = - abs(this.yVel);

				this.sticktopaddle = true;
				this._updateSticky();
				return;
			}

			if (global_paddle1.style === 1) {
				var origSpeed = Math.sqrt((this.xVel*this.xVel)
									+ (this.yVel*this.yVel));
				this.xVel = min(5, max(-5, (this.cx - global_paddle1.cx) /
							(abs(this.xVel) * global_paddle1.halfWidth)));
				this.yVel = - 1;
				var newSpeed = Math.sqrt((this.xVel*this.xVel)
								   + (this.yVel*this.yVel));
				this.xVel *= origSpeed / newSpeed;
				this.yVel *= origSpeed / newSpeed;

				// We update nextY accordingly.
				nextY = prevY + this.yVel * du;
				// We update nextX accordingly.
				nextX = prevX + this.xVel * du;
			} else {
				this.yVel = - abs(this.yVel);

				// We update nextY accordingly.
				nextY = prevY + this.yVel * du;
			}
		}

		if (global_runmode > 2) {
			// While the bricks are fading in, we want
			// to let the ball phase through them if it
			// goes downwards, and only collide with them
			// if it goes upwards.
			if ((global_runmode > 3) || (this.yVel < 0)) {
				// Vertical bounceing from horizontal sides of bricks
				if (global_bricks.collidesVert(prevX, prevY, nextX, nextY, this.radius)) {
					if (this.meteor === false) {
						this.yVel *= -1;
					}

					// We update nextY accordingly.
					nextY = prevY + this.yVel * du;
				}

				// Horizontal bounceing from vertical sides of bricks
				if (global_bricks.collidesHorz(prevX, prevY, nextX, nextY, this.radius)) {
					if (this.meteor === false) {
						this.xVel *= -1;
					}

					// We update nextX accordingly.
					nextX = prevX + this.xVel * du;
				}
			}
		}
	}

	// Bounce off top and bottom edges
	if (global_runmode < 3) {
		if (nextY < global_canvas_top ||
			nextY > global_canvas_bottom) {
			if (nextY < global_canvas_top) {
				this.yVel = abs(this.yVel);
			} else {
				this.yVel = - abs(this.yVel);
			}

			if (global_runmode === 2) {
				// We give the players their points if we are in the two-paddle-part =)
				if (nextY < global_canvas_top) {
					global_score.p1 += 1;
				} else {
					global_score.p2 += 1;
				}
			}
		}
	} else {
		var cur_bottom;

		if (global_runmode < 5) {
			cur_bottom = global_canvas_bottom;
		} else {
			cur_bottom = global_real_height;
		}

		if (nextY < global_walls.topinneredge ||
			nextY > cur_bottom) {
			if (nextY < global_walls.topinneredge) {
				this.yVel = abs(this.yVel);
			} else {
				this.yVel = - abs(this.yVel);
			}

			if (nextY > cur_bottom) {
				// We lose a life.
				global_score.bl -= 1;

				if (global_score.bl < 0 && global_runmode < 5) {
					set_runmode(5);
					this.yVel = abs(this.yVel);
				} else {
					if (!global_launched) {
						setTimeout(messageLaunch,2000);
					}

					this.reset();
				}
			}
		}
	}

	// Bounce off left and right edges
	if (global_runmode < 3) {
		if (nextX < global_canvas_left ||
			nextX > global_canvas_right) {
			if (nextX < global_canvas_left) {
				this.xVel = abs(this.xVel);
			} else {
				this.xVel = - abs(this.xVel);
			}

			if (global_runmode < 2) {
				// We give the players their points if we are in the two-paddle-part =)
				if (nextX < global_canvas_left) {
					global_score.p2 += 1;
				} else {
					global_score.p1 += 1;
				}
			}
		}
	} else {
		if (nextX < global_walls.leftinneredge ||
			nextX > global_walls.rightinneredge) {
			if (nextX < global_walls.leftinneredge) {
				this.xVel = abs(this.xVel);
			} else {
				this.xVel = - abs(this.xVel);
			}
		}
	}

	// *Actually* update my position
	// ...using whatever velocity I've ended up with
	//
	this.cx += this.xVel * du;
	this.cy += this.yVel * du;
};

global_ball.turn = function() {
	var i = this.cy;
	this.cy = 9 + global_canvas_right - this.cx;
	this.cx = i;

	var i = this.yVel;
	this.yVel = - this.xVel;
	this.xVel = i;
}

global_ball.reset = function() {
	this.sticktopaddle = true;
	this.xVel = -5;
	this.yVel = -4;
	// We want to update immediately to not
	// draw another frame before changing the
	// position on the screen.
	this.update(0);
};

global_ball.render = function(ctx) {
	if (this.meteor) {
		ctx.fillStyle = "#FF2020";
	} else {
		ctx.fillStyle = this.color;
	}

	ctx.beginPath();
	ctx.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);
	ctx.fill();
};

global_ball.getY = function() {
	if (global_runmode < 2) {
		return this.cy;
	} else {
		return this.cx;
	}
};


// BRICKS

var global_bricks = {
	brick : [],
	visible : false,
	brickwidth : 20,
	brickheight : 10,
	// the amount of pixels all bricks
	// are still moving until they stop again
	allVelY : 0,
	// if true, all blocks are moving horizontally continuously
	conthorzmove : false,
	// true for right, false for left
	conthorzdir : true
};

global_bricks.trashAll = function() {
	this.brick = [];
}

global_bricks.update = function(du) {
	// You shall not update invisible bricks!
	if (!this.visible) return;

	var len = this.brick.length;

	// fade out before going away
	for (var i = 0; i < len; i++) {
		if (!this.brick[i].cl) {
			this.brick[i].ca -= 0.05;
			this.brick[i].co = this.brick[i].cw + this.brick[i].ca + ")";

			if (this.brick[i].ca < 0) {
				this.brick.splice(i, 1);

				len = this.brick.length;
			}
		}
	}

	// moving vertically
	if (this.allVelY > 0) {
		// We divide by 3 to get a nicer, slower slide-in effect.
		var ourdu = min(du / 3, this.allVelY);
		this.allVelY -= ourdu;

		var our_bottom = global_real_height - 80;

		if (global_runmode < 5) {
			 our_bottom = global_canvas_bottom - 60;
		}

		for (var i = 0; i < len; i++) {
			this.brick[i].ty += ourdu;
			this.brick[i].by += ourdu;

			if (this.brick[i].by > our_bottom) {
				this.brick[i].cl = false;
			}
		}

		// In level 2, we want more and more and more and more slide-ins!
		if ((global_runmode === 7) && (this.allVelY === 0)) {
			this.initLevelTwo();
		}
	}

	// moving horizontally
	if (this.conthorzmove) {
		// We divide by 3 to get a nicer, slower slide-in effect.
		var ourdu = du / 3;

		if (this.conthorzdir) {
			var compwith = global_walls.rightinneredge - 5;

			for (var i = 0; i < len; i++) {
				this.brick[i].lx += ourdu;
				this.brick[i].rx += ourdu;

				if (this.brick[i].rx > compwith) {
					this.conthorzdir = false;
				}
			}
		} else {
			var compwith = global_walls.leftinneredge + 5;

			for (var i = 0; i < len; i++) {
				this.brick[i].lx -= ourdu;
				this.brick[i].rx -= ourdu;

				if (this.brick[i].lx < compwith) {
					this.conthorzdir = true;
				}
			}
		}
	}

	if ((len === 0) && (!global_gameover)) {
		if (global_runmode < 7) {
			set_runmode(global_runmode + 1);
		} else {
			global_messages.display("YOU WON THE GAME! =)");
			global_gameover = true;
		}
	}
};

global_bricks.render = function(ctx) {
	// You shall not render invisible bricks!
	if (!this.visible) return;

	var len = this.brick.length;

	for (var i = 0; i < len; i++) {
		ctx.fillStyle = this.brick[i].co;

		ctx.fillRect(this.brick[i].lx, this.brick[i].ty,
					 this.brick[i].wx, this.brick[i].hy);
	}

	// We draw white above the walls just in
	// case we are throwing in rows, so that
	// they are not visible early on
	if (global_runmode === 4) {
		ctx.fillStyle = global_field.color;
		ctx.fillRect(global_canvas_left, global_canvas_top,
					 global_canvas_right - global_canvas_left,
					 global_walls.topouteredge - global_canvas_top);
	}

	if (global_runmode > 6) {
		ctx.fillStyle = global_field.color;
		ctx.fillRect(0, 0, global_real_width, global_walls.topouteredge);
	}
};

global_bricks.initWallbreakBW = function() {
	this.visible = true;

	this.brickwidth = (global_walls.rightinneredge - (global_walls.leftinneredge + 2)) / 10;
	this.brickheight = 20;
	var topedge = global_walls.topinneredge + this.brickheight + 2;

	for (var i = 0; i < 50; i++) {
		this.brick[i] = {
			lx : 2 + global_walls.leftinneredge + ((i % 10) * this.brickwidth),			  // left x
			ty : topedge + (parseInt(i / 10) * this.brickheight),						  // top y
			rx : global_walls.leftinneredge + ((i % 10) * this.brickwidth) + this.brickwidth - 1, // right x
			by : topedge + (parseInt(i / 10) * this.brickheight) + this.brickheight - 2,  // bottom y
			wx : this.brickwidth - 2,  // width
			hy : this.brickheight - 2, // height
			ro : 0,				// rotation
			co : "#000000",		// color
			ca : 1,				// colalpha
			cw : "rgba(0,0,0,", // colwoalpha
			cl : true,			// not true if this brick is supposed to be erased soon
			de : true,			// is this brick destructible? true or false
			mo : 0				// mode, 0: black, 1: colourful
		};
	}
}

global_bricks.initLevelTwo = function() {
	global_bricks.addRowFromTop("rgba(255,255,0,");
	global_bricks.addRowFromTop("rgba(255,192,0,");
	global_bricks.addRowFromTop("rgba(255,128,0,");
	global_bricks.addRowFromTop("rgba(255,64,64,");
	global_bricks.addRowFromTop("rgba(192,0,128,");
	global_bricks.addRowFromTop("rgba(128,0,192,");
	global_bricks.addRowFromTop("rgba(64,64,255,");
	global_bricks.addRowFromTop("rgba(0,128,255,");
	global_bricks.addRowFromTop("rgba(0,192,255,");
	global_bricks.addRowFromTop("rgba(0,255,255,");
	global_bricks.addRowFromTop("rgba(64,255,192,");
	global_bricks.addRowFromTop("rgba(128,255,128,");
	global_bricks.addRowFromTop("rgba(192,255,64,");
}

global_bricks.addRowFromTop = function(colwoalpha) {
	// We are subtracting this.allVelY because there might still be previous
	// rows sliding in, in which case this row needs to start higher to not
	// come in on top of the other one.
	var topedge = global_walls.topinneredge + this.brickheight + 2 - ((2 * this.brickheight) + this.allVelY);

	var len = this.brick.length;
	var color = colwoalpha + "1)";

	for (var i = 0; i < 10; i++) {
		this.brick[i + len] = {
			lx : 2 + global_walls.leftinneredge + ((i % 10) * this.brickwidth),			  // left x
			ty : topedge + (parseInt(i / 10) * this.brickheight),					   // top y
			rx : global_walls.leftinneredge + ((i % 10) * this.brickwidth) + this.brickwidth - 1, // right x
			by : topedge + (parseInt(i / 10) * this.brickheight) + this.brickheight - 2,	 // bottom y
			wx : this.brickwidth - 2,  // width
			hy : this.brickheight - 2, // height
			ro : 0,			   // rotation
			co : color,		   // color
			ca : 1,			   // colalpha
			cw : colwoalpha,	  // colwoalpha
			cl : true,			// not true if this brick is supposed to be erased soon
			de : true,			// is this brick destructible? true or false
			mo : 1				// mode, 0: black, 1: colourful
		};
	}

	this.allVelY += this.brickheight;
}

// We set the alphas of all bricks to the given value.
global_bricks.setAllAlphas = function(alpha) {
	var len = this.brick.length;

	for (var i = 0; i < len; i++) {
		if (this.brick[i].cl) {
			this.brick[i].ca = alpha;
			this.brick[i].co = this.brick[i].cw + alpha + ")";
		}
	}
}

global_bricks.setBlackColwoalpha = function(colwoalpha) {
	var len = this.brick.length;

	for (var i = 0; i < len; i++) {
		if (this.brick[i].mo === 0) {
			this.brick[i].cw = colwoalpha;
			this.brick[i].co = colwoalpha + this.brick[i].ca + ")";
		}
	}
}

// We set the destructible-values of all bricks to the given value.
global_bricks.setAllDestructibles = function(destructible) {
	var len = this.brick.length;

	for (var i = 0; i < len; i++) {
		this.brick[i].de = destructible;
	}
}

global_bricks.collidesHorz = function(prevX, prevY,
								  nextX, nextY, r) {
	// You cannot collide with invisible bricks.
	if (!this.visible) return false;

	var len = this.brick.length;

	for (var i = 0; i < len; i++) {
		var brickEdge = (this.brick[i].lx + this.brick[i].rx) / 2;
		// Check X coords
		if ((nextX - r < brickEdge && prevX - r >= brickEdge) ||
			(nextX + r > brickEdge && prevX + r <= brickEdge)) {
			// Check Y coords
			if (nextY + r >= this.brick[i].ty &&
				nextY - r <= this.brick[i].by) {
				// It's a hit!
				if (this.brick[i].cl && this.brick[i].de) {
					this.brick[i].cl = false;
					global_score.oneMoreBrick((prevX + nextX) / 2, (prevY + nextY) / 2);
				}

				return true;
			}
		}
	}

	// It's a miss!
	return false;
};

global_bricks.collidesVert = function(prevX, prevY,
								  nextX, nextY, r) {
	// You cannot collide with invisible bricks.
	if (!this.visible) return false;

	var len = this.brick.length;

	for (var i = 0; i < len; i++) {
		var brickEdge = (this.brick[i].ty + this.brick[i].by) / 2;
		// Check Y coords
		if ((nextY - r < brickEdge && prevY - r >= brickEdge) ||
			(nextY + r > brickEdge && prevY + r <= brickEdge)) {
			// Check X coords
			if (nextX + r >= this.brick[i].lx &&
				nextX - r <= this.brick[i].rx) {
				// It's a hit!
				if (this.brick[i].cl && this.brick[i].de) {
					this.brick[i].cl = false;
					global_score.oneMoreBrick((prevX + nextX) / 2, (prevY + nextY) / 2);
				}

				return true;
			}
		}
	}

	// It's a miss!
	return false;
};


// OUR PLAYFIELD

var global_field = {
	rotation   : 0,
	colalpha   : 0,
	oppwoalpha : "rgba(255,255,255,",
	colwoalpha : "rgba(0,0,0,",
	color	  : "rgba(0,0,0,0)",
	// Will be true once twilight has passed, that is the moment
	// at which alpha = 50%, during runmode 5.
	twilight   : false
};

global_field.render = function(ctx) {
	if (global_runmode < 5) {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	} else {
		if (this.colalpha < 1) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		}
		ctx.fillStyle = this.color;
		ctx.fillRect(0, 0, global_real_width, global_real_height);
	}
}

global_field.update = function(du) {
	if (global_runmode === 1) {
		this.rotation -= (du / 300);

		if (this.rotation < - Math.PI / 2) {
			set_runmode(2);
		}
	}

	if (global_runmode === 5) {
		this.colalpha += du / 300;
		if (this.colalpha > 1) {
			this.colalpha = 1;
			set_runmode(6);
		}
		this.color = this.colwoalpha + this.colalpha + ")";

		if (this.colalpha < 0.5) {
			global_ball.color = this.colwoalpha + (1 - (2 * this.colalpha)) + ")";
		} else {
			if (!this.twilight) {
				this.twilight = true;

				global_score.gobyrealsize = true;
				global_walls.setToRealSize();
				global_bricks.conthorzmove = true;
				global_paddle1.style = 1;
			}

			global_ball.color = this.oppwoalpha + ((this.colalpha * 2) - 1) + ")";
		}

		global_score.color = global_ball.color;
		global_paddle1.color = global_ball.color;
		global_walls.color = global_ball.color;

		var bcwa = parseInt(this.colalpha * 255);
		global_bricks.setBlackColwoalpha("rgba(" + bcwa + "," + bcwa + "," + bcwa + ",");
	}
}


// KEYBOARD HANDLING

global_main.keys = [];

function handleKeydown(evt) {
	global_main.keys[evt.keyCode] = true;
}

function handleKeyup(evt) {
	global_main.keys[evt.keyCode] = false;
}

function keyHasBeenPressed(keyCode) {
	var result = global_main.keys[keyCode];
	global_main.keys[keyCode] = false;
	return result;
}

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);


// MESSAGES

var global_messages = {
	text	   : [],
	color	   : [],
	colalpha   : [],
	colwoalpha : [],
	alphadir   : [], // true if alpha is increasing, otherwise false
	font	   : [],
	fontsize   : [],
	visible	: true,

	update: function (du) {

		// You shall not update an invisible message!
		if (!this.visible) return;

		if (this.text.length > 0) {
			var emptystrs = 0;

			for (var i=0; i < this.text.length; i++) {

				if (this.alphadir[i] && this.colalpha[i] < 1) {
					// We want to update the color of the score.
					this.colalpha[i] += du / 300;

					if (this.colalpha[i] > 1) {
						this.colalpha[i] = 1;
					}

					this.color[i] = this.colwoalpha[i] + this.colalpha[i] + ")";
				} else if ((!this.alphadir[i]) && this.colalpha[i] > 0) {
					// We want to update the color of the score.
					this.colalpha[i] -= du / 300;

					if (this.colalpha[i] <= 0) {
						this.colalpha[i] = 0;
						this.text[i] = "";
					}

					this.color[i] = this.colwoalpha[i] + this.colalpha[i] + ")";
				} else if ((!this.alphadir[i]) && this.colalpha[i] === 0) {
					emptystrs++;
				}

			}

			// Once all the strings are empty, we can completely
			// clear the message queue.
			if (emptystrs === this.text.length) {
				this.text.length = 0;
				this.color.length = 0;
				this.colalpha.length = 0;
				this.colwoalpha.length = 0;
				this.alphadir.length = 0;
				this.font.length = 0;
				this.fontsize.length = 0;
			}
		}
	},

	render: function (ctx) {
		// You shall not render an invisible score!
		if (!this.visible) return;

		if (this.text.length > 0) {
			var sofarsize = 0;

			for (var i=0; i < this.text.length; i++) {
				ctx.font = this.font[i];
				ctx.fillStyle = this.color[i];
				var textwidth = ctx.measureText(this.text[i]).width;
				if (global_runmode < 5) {
					ctx.fillText(this.text[i], (global_canvas_right + global_canvas_left
								 - textwidth) / 2, global_canvas_bottom - (70 + sofarsize));
				} else {
					ctx.fillText(this.text[i], (global_real_width - textwidth) / 2,
								 global_real_height - (70 + sofarsize));
				}

				sofarsize += this.fontsize[i] + 4;
			}
		}
	},

	display: function (disptext) {
		var len = this.text.length;

		this.text[len] = disptext;
		this.colalpha[len] = 0;
		if (global_runmode < 5) {
			this.colwoalpha[len] = "rgba(0,0,0,";
		} else {
			this.colwoalpha[len] = "rgba(255,255,255,";
		}
		this.color[len] = this.colwoalpha[len] + this.colalpha[len] + ")";
		this.alphadir[len] = true;
		this.font[len] = this.calculateFont(len);

		this.texts += 1;
	},

	calculateFont: function (lengthofarray) {
		var len = this.text.length - 1;

		if (this.text.length > -1) {
			var comp = true;
			var ourwidth;

			if (global_runmode < 5) {
				ourwidth = (global_canvas_right - global_canvas_left) * 0.9;
			} else {
				ourwidth = global_real_width * 0.9;
			}

			for (var textsize = 50; comp; textsize -= 5) {
				global_ctx.font = "bold " + textsize + "px Arial";
				if (global_ctx.measureText(this.text[len]).width < ourwidth) {
					comp = false;
				};
			}

			global_messages.fontsize[lengthofarray] = textsize;
			return global_ctx.font;
		}
	}
}

// Unshows the oldest still visible message from the queue.
function messageUnShow () {
	for (var i=0; i < global_messages.alphadir.length; i++) {
		if (global_messages.alphadir[i]) {
			global_messages.alphadir[i] = false;
			return;
		}
	}
}

function messageLaunch () {
	if (!global_launched) {
		global_messages.display("PRESS [SPACE] TO LAUNCH");
		setTimeout(messageUnShow,5000);
	}
}

var global_ADpressed = false;

function messageMoveAD () {
	if (!global_ADpressed) {
		global_messages.display("PRESS [LEFT] OR [RIGHT] TO MOVE");
		setTimeout(messageUnShow, 5000);
	}
}


// SCORES

var global_score = {
	p1: 0, // score for player 1 in the beginning
	p2: 0, // score for player 2 in the beginning
	br: 0, // score for wallbreak
	bl: 5, // lifes for wallbreak
	blvl: 0, // level for wallbreak
	color		: "#000000",
	colalpha	 : 1,
	colwoalpha   : "rgba(0,0,0,",
	drawturned   : false,
	visible	  : true,
	// true once we switch to the real size of the canvas
	gobyrealsize : false
};

global_score.update = function(du) {
	// You shall not update an invisible score!
	if (!this.visible) return;

	if (global_runmode === 2) {
		// We want to update the color of the score.
		this.colalpha -= du / 300;
		if (this.colalpha < 0) {
			set_runmode(3);
			this.colalpha = 0;
		}
		this.color = this.colwoalpha + this.colalpha + ")";

		// We also want the paddle to change its color,
		// and rather than calculating everything again,
		// we just do this now.
		global_paddle2.color = this.color;
	}

	if (this.bl < 0 && !global_gameover) {
		global_messages.display("GAME OVER");
		global_gameover = true;
	}
};

global_score.render = function(ctx) {
	// You shall not render an invisible score!
	if (!this.visible) return;

	// We draw the two-paddle-score
	if (global_runmode < 3) {
		ctx.save();

		if (this.drawturned) {
			ctx.translate(((global_canvas_right - global_canvas_left) / 2) + global_canvas_left,
						  ((global_canvas_bottom - global_canvas_top) / 2) + global_canvas_top);
			ctx.rotate(- Math.PI / 2);
			ctx.translate(- ((global_canvas_right - global_canvas_left) / 2) - global_canvas_left,
						  - ((global_canvas_bottom - global_canvas_top) / 2) - global_canvas_top);
		}

		ctx.font = "bold 40px Arial";
		var curscore = this.p1 + ":" + this.p2;
		var textwidthL = ctx.measureText("" + this.p1).width;
		var textwidthM = ctx.measureText(":").width;
		ctx.fillStyle = this.color;
		ctx.fillText(curscore, ((global_canvas_right - (global_canvas_left + textwidthM)) / 2)
							   + global_canvas_left - textwidthL, 47);

		ctx.restore();
	} else {
		ctx.font = "bold 40px Arial";
		var curscore = "Score: " + this.br;
		ctx.fillStyle = this.color;
		ctx.fillText(curscore, global_canvas_left + 3, 42);

		// We take the maximum as we don't want to display a negative
		// score, even not for the game-over-frame, as that would just
		// look stupid.
		var curscore = "Lives: " + max(0, this.bl);
		var textwidth = ctx.measureText(curscore).width;
		if (this.gobyrealsize) {
			ctx.fillText(curscore, global_real_width - ((global_canvas_left * 2)
						 + textwidth + 3), 42);

			curscore = "Level: " + this.blvl;
			var textwidth = ctx.measureText(curscore).width;
			ctx.fillText(curscore, (global_real_width - textwidth) / 2, 42);
		} else {
			ctx.fillText(curscore, global_canvas_right - (textwidth + 3), 42);
		}
	}
};

global_score.turn = function() {
	this.drawturned = true;
}

global_score.oneMoreBrick = function(posX, posY) {
	this.br += 1;

	if ((global_runmode < 5) && (this.br > 13) && (this.br % 8 === 0)) {
		var varc = "rgba(";
		var rownum = parseInt(this.br / 8) % 6;

		if (rownum === 5) {
			varc += "255,129,30";
		} else if (rownum === 4) {
			varc += "255,145,29";
		} else if (rownum === 3) {
			varc += "11,175,29";
		} else if (rownum === 2) {
			varc += "107,100,255";
		} else if (rownum === 1) {
			varc += "205,62,207";
		} else {
			varc += "250,82,85";
		}

		varc += ",";

		global_bricks.addRowFromTop(varc);
	}

  if ((global_runmode > 5) && (Math.random() < 0.5)) {
	  global_sprites.addUpgrade(posX, posY);
  }
}


// SPRITES

var global_sprites = {
	// The following two arrays contain the names of the
	// upgrades that we want to store.
	upx: [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	upy: [0, 0, 1, 1, 2, 2, 3, 3, 5, 5],
	// This two-dimensional array contains all the
	// upgrade-pictures.
	upi: [],
	// These integers contain the half-width and half-height
	// of every upgrade-thingy.
	upw: 0,
	uph: 0,
	// This array contains all the currently visible
	// upgrade-objects.
	ups: []
};

global_sprites.update = function(du) {
	for (var i = 0; i < this.ups.length; i++) {
		var prevX = this.ups[i].cx;
		var prevY = this.ups[i].cy;

		// Compute my provisional new position (barring collisions)
		var nextX = prevX + this.ups[i].xVel * du;
		var nextY = prevY + this.ups[i].yVel * du;

		// Bounce off the paddle
		if (global_paddle1.upCollidesVert(prevX, prevY, nextX, nextY, this.upw, this.uph)) {
			this.applyUpgrade(this.ups[i].nx, this.ups[i].ny);
			this.ups.splice(i, 1);
		} else {
			this.ups[i].cy = nextY;
			this.ups[i].cx = nextX;

			// We take the upgrades out that fall out of the visible
			// screen.
			if (this.ups[i].cy + this.uph > global_real_height) {
				this.ups.splice(i, 1);
			}
		}
	}
};

global_sprites.render = function(ctx) {
	for (var i = 0; i < this.ups.length; i++) {
		var u = this.ups[i];

		// We actually draw the image to the canvas.
		ctx.drawImage(this.upi[u.nx][u.ny], u.cx - this.upw, u.cy - this.uph);
	}
};

// determine whether or not upgrade num would be stupid right now
global_sprites.upStupid = function(num) {
	if (num < 0) {
		return true;
	}

	var ny = this.upy[num];

	if (this.upx[num] === 0) {
		if ((ny === 0) && ((global_ball.xVel*global_ball.xVel) + (global_ball.yVel*global_ball.yVel) < 20)) {
			return true;
		} else if ((ny === 1) && (global_paddle1.halfWidth > 100)) {
			return true;
		} else if ((ny === 2) && global_paddle1.alwaysSticky) {
			return true;
		} else if ((ny === 3) && global_ball.meteor) {
			return true;
		} else if ((ny === 4) && global_paddle1.shootLasers) {
			return true;
		} else if ((ny === 5) && (global_ball.radius > 30)) {
			return true;
		}
	} else {
		if ((ny === 1) && (global_paddle1.halfWidth < 20)) {
			return true;
		} else if ((ny === 2) && ((global_paddle1.alwaysSticky === false) ||
								  (global_paddle1.shootLasers === false))) {
			return true;
		} else if ((ny === 3) && (global_ball.meteor === false)) {
			return true;
		} else if ((ny === 5) && (global_ball.radius < 5)) {
			return true;
		}
	}

	return false;
};

global_sprites.addUpgrade = function(posx, posy) {
	for (var num = -1; this.upStupid(num);
		num = Math.floor(Math.random()*this.upx.length)) {
	}

	this.ups[this.ups.length] = {
		cx: posx,
		cy: posy,
		xVel: 0,
		yVel: 5,
		nx: this.upx[num],
		ny: this.upy[num]
	};
};

// Apply the upgrade number (nx,ny).
global_sprites.applyUpgrade = function(nx, ny) {
	if (nx === 0) {
		// Here are all the "good" upgrades.

		if (ny === 0) {
			global_ball.xVel *= 0.5;
			global_ball.yVel *= 0.5;
		} else if (ny === 1) {
			global_paddle1.halfWidth *= 1.5;

			// We move the paddle if it is in the way.
			global_paddle1.cx = min(max(global_paddle1.cx,
						   global_walls.leftinneredge + global_paddle1.halfWidth),
						   global_walls.rightinneredge - global_paddle1.halfWidth);
		} else if (ny === 2) {
			global_paddle1.alwaysSticky = true;
		} else if (ny === 3) {
			global_ball.meteor = true;
		} else if (ny === 4) {
			global_paddle1.shootLasers = true;
		} else if (ny === 5) {
			global_ball.radius *= 2;
		}
	} else {
		// Here are all the "bad" downgrades.

		if (ny === 0) {
			global_ball.xVel *= 2;
			global_ball.yVel *= 2;
		} else if (ny === 1) {
			global_paddle1.halfWidth *= (2/3);
		} else if (ny === 2) {
			global_paddle1.alwaysSticky = false;
			global_paddle1.shootLasers = false;
		} else if (ny === 3) {
			global_ball.meteor = false;
		} else if (ny === 5) {
			global_ball.radius *= 0.5;
		}
	}
};

global_sprites.addImage = function(x, y, picture) {
	this.upi[x][y] = picture;
};

global_sprites.init = function() {
	this.upi[0] = [];
	this.upi[1] = [];
};

// This function preloads our sprites.
function preload(num) {
	if (num === 0) {
		global_sprites.init();
	}

	var preImage = new Image();

	preImage.onload = function() {
		global_sprites.addImage(global_sprites.upx[num], global_sprites.upy[num], this);

		if (num + 1 < global_sprites.upx.length) {
			preload(num + 1);
		} else {
			global_sprites.upw = this.width / 2;
			global_sprites.uph = this.height / 2;

			global_main.startGame();
		}
	};

	preImage.src = "up" + global_sprites.upx[num] + global_sprites.upy[num] + ".png";
}


// WALLS

var global_walls = {
	leftouteredge   : 0,
	leftinneredge   : 0,
	rightinneredge  : 0,
	rightouteredge  : 0,
	topouteredge	: 0,
	topinneredge	: 0,
	bottomouteredge : 0,
	width   : 15,
	color   : "#000000",
	colalpha   : 0,
	colwoalpha : "rgba(0,0,0,",
	visible : false
};

global_walls.update = function(du) {
	// You shall not update invisible walls!
	if (!this.visible) return;

	if (global_runmode === 3) {
		// We want to update the color of the score.
		this.colalpha += du / 300;
		if (this.colalpha > 1) {
			this.colalpha = 1;
			set_runmode(4);
		}
		this.color = this.colwoalpha + this.colalpha + ")";

		// We also want to fade in the bricks,
		// and instead of calculating this for each one
		// separately, we simply use the value that has
		// been calculated on all of them. =)
		global_bricks.setAllAlphas(this.colalpha);
		global_score.color = this.color;

		// If the paddle is in an invalid state,
		// then we slowly move it to a valid state.
		if (global_paddle1.cx + 5 < this.leftinneredge + global_paddle1.halfWidth) {
			global_paddle1.cx += max(1, du);
		}
		if (global_paddle1.cx > 5 + this.rightinneredge - global_paddle1.halfWidth) {
			global_paddle1.cx -= max(1, du);
		}
	}

	// Actually it is 380, but it looks nicer if we leave a few
	// extra pixels so that the bricks can move instead of oscillating
	// to and fro in each frame.
	if ((global_runmode === 6) &&
		(this.rightouteredge - this.leftouteredge > 385)) {
		var ourdu = du / 15;

		this.leftouteredge += ourdu;
		this.leftinneredge += ourdu;
		this.rightinneredge -= ourdu;
		this.rightouteredge -= ourdu;

		// We move the paddle if it is in the way.
		global_paddle1.cx = min(max(global_paddle1.cx,
					   this.leftinneredge + global_paddle1.halfWidth),
					   this.rightinneredge - global_paddle1.halfWidth);
	}
};

global_walls.render = function(ctx) {
	// You shall not render invisible walls.
	if (!this.visible) return;

	ctx.fillStyle = this.color;
	// left wall
	ctx.fillRect(this.leftouteredge, this.topinneredge,
				 this.width, this.bottomouteredge - this.topinneredge);
	// right wall
	ctx.fillRect(this.rightinneredge, this.topinneredge,
				 this.width, this.bottomouteredge - this.topinneredge);
	// top wall
	ctx.fillRect(this.leftouteredge, this.topouteredge,
				 this.rightouteredge - this.leftouteredge, this.width);
};

global_walls.init = function() {
	this.leftouteredge = global_canvas_left + 10;
	this.leftinneredge = this.leftouteredge + this.width;
	this.rightouteredge = global_canvas_right - 10;
	this.rightinneredge = this.rightouteredge - this.width;
	this.topouteredge = global_canvas_top + 38;
	this.topinneredge = this.topouteredge + this.width;
	this.bottomouteredge = global_canvas_bottom;
}

global_walls.setToRealSize = function() {
	this.rightouteredge = global_real_width - ((global_canvas_left * 2) + 10);
	this.rightinneredge = this.rightouteredge - this.width;
	this.bottomouteredge = global_real_height;
}


// UTILS

// Coordinates the changes from one runmode to the next.
function set_runmode(newmode) {
	// In this case, we have been rotating into the wallbreak mode,
	// and now we need to quickly rotate back to normal, and change
	// the positions of all the thingies on the screen accordingly!
	if (newmode === 2) {
		global_field.rotation = 0;

		global_paddle1.turn();
		global_paddle2.turn();
		global_ball.turn();

		global_score.turn();

		setTimeout(messageMoveAD, 4000);
	} else if (newmode === 3) {
		global_paddle2.visible = false;

		global_walls.colalpha = 0;
		global_walls.color = global_walls.colwoalpha + global_walls.colalpha + ")";
		global_walls.visible = true;

		global_bricks.initWallbreakBW();

		if (global_ball.cy < global_walls.topinneredge) {
			global_ball.cy = global_walls.topinneredge;
		}

		if (global_ball.cx < global_walls.leftinneredge) {
			global_ball.cx = global_walls.leftinneredge;
		}

		if (global_ball.cx > global_walls.rightinneredge) {
			global_ball.cx = global_walls.rightinneredge;
		}
	} else if (newmode === 4) {
		global_walls.colalpha = 1;
		global_walls.color = global_walls.colwoalpha + global_walls.colalpha + ")";
		global_bricks.setAllAlphas(global_walls.colalpha);
		global_bricks.setAllDestructibles(true);
		global_score.color = global_walls.color;
	} else if (newmode === 5) {
		global_score.bl = 5;
		global_score.blvl = 1;
	} else if (newmode === 6) {
		global_paddle1.cy = global_real_height - (global_paddle1.halfHeight + 20);

		global_field.colalpha = 1;
		global_field.color = global_field.colwoalpha + "1)";

		global_score.gobyrealsize = true;
		global_walls.setToRealSize();
		global_bricks.conthorzmove = true;
		global_paddle1.style = 1;

		global_ball.color = global_field.oppwoalpha + "1)";

		global_score.color = global_ball.color;
		global_paddle1.color = global_ball.color;
		global_walls.color = global_ball.color;

		global_bricks.setBlackColwoalpha("rgba(255,255,255,");
	} else if (newmode === 7) {
		global_score.blvl = 2;

		if (global_walls.rightouteredge - global_walls.leftouteredge > 381) {
			var ourdu = (global_walls.rightouteredge - (global_walls.leftouteredge + 381)) / 2;

			global_walls.leftouteredge += ourdu;
			global_walls.leftinneredge += ourdu;
			global_walls.rightinneredge -= ourdu;
			global_walls.rightouteredge -= ourdu;

			// We move the paddle if it is in the way.
			global_paddle1.cx = min(max(global_paddle1.cx,
						   global_walls.leftinneredge + global_paddle1.halfWidth),
						   global_walls.rightinneredge - global_paddle1.halfWidth);

			// We move the ball if it is in the way.
			global_ball.cx = min(max(global_ball.cx,
						 global_walls.leftinneredge + global_ball.radius),
						 global_walls.rightinneredge - global_ball.radius);
		}

		global_bricks.trashAll();
		global_bricks.conthorzmove = false;
		global_bricks.initLevelTwo();
	} else if (newmode > 7) {
		// Prevent overshooting with the cheat-key
		newmode = 7;
	}

	global_runmode = newmode;
}

function min(x, y) {
  if (x < y) return x;
  return y;
}

function max(x, y) {
  if (x < y) return y;
  return x;
}

function abs(x) {
  if (x < 0) return -x;
  return x;
}


// Preload the sprites before the game even begins :)
// (Once all the sprites are loaded, the game will start, as the following function will be called...)
preload(0);


global_main.startGame = function() {

	global_walls.init();

	window.focus(true);

	window.setTimeout(function () {
		// We set the runmode from 0 to 1 - let's start rotating! Whoop whoop! =)
		if (global_runmode === 0) {
			set_runmode(1);
		}
	}, 4000);

	this._requestNextIteration();
}
