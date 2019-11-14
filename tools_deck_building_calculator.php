
<div class="content">
	@content(tools_deck_building_calculator_intro)
</div>

<div class="content">
	<div>@content(tools_deck_building_calculator_you_have_a_deck_of) <input type="text" id="dBC-deck-size" onchange="dBC.docalculate()" onkeyup="dBC.docalculate()" value="60"></input> @content(tools_deck_building_calculator_cards).</div>
</div>

<div class="content">
	<div>@content(tools_deck_building_calculator_you_mark) <input type="text" id="dBC-mark-amount-0" onchange="dBC.docalculate()" onkeyup="dBC.docalculate()" value="4"></input> @content(tools_deck_building_calculator_cards_as) <input type="text" id="dBC-mark-0" onchange="dBC.docalculate()" value="@content(tools_deck_building_calculator_queen)"></input>.</div>
	<div>@content(tools_deck_building_calculator_you_mark) <input type="text" id="dBC-mark-amount-1" onchange="dBC.docalculate()" onkeyup="dBC.docalculate()" value="4"></input> @content(tools_deck_building_calculator_cards_as) <input type="text" id="dBC-mark-1" onchange="dBC.docalculate()" value="@content(tools_deck_building_calculator_king)"></input>.</div>
	<div>@content(tools_deck_building_calculator_you_mark) <input type="text" id="dBC-mark-amount-2" onchange="dBC.docalculate()" onkeyup="dBC.docalculate()" value="4"></input> @content(tools_deck_building_calculator_cards_as) <input type="text" id="dBC-mark-2" onchange="dBC.docalculate()" value="@content(tools_deck_building_calculator_cat)"></input>.</div>
	<div>@content(tools_deck_building_calculator_you_mark) <input type="text" id="dBC-mark-amount-3" onchange="dBC.docalculate()" onkeyup="dBC.docalculate()" value="4"></input> @content(tools_deck_building_calculator_cards_as) <input type="text" id="dBC-mark-3" onchange="dBC.docalculate()" value="@content(tools_deck_building_calculator_dog)"></input>.</div>
</div>

<div class="content">
	<div>@content(tools_deck_building_calculator_you_draw) <input type="text" id="dBC-draw-amount" onchange="dBC.docalculate()" onkeyup="dBC.docalculate()" value="13"></input> @content(tools_deck_building_calculator_cards).</div>
</div>

<div class="content">
	@content(tools_deck_building_calculator_result) <span id="dBC-output"></span>.
</div>


<script src="/tools/deckBuildingCalculator.js?v=@version"></script>
