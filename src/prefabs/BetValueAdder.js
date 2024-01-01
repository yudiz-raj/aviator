
// You can write more code here

/* START OF COMPILED CODE */

class BetValueAdder extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// bet_base
		const bet_base = scene.add.image(0, 0, "bet-base");
		bet_base.scaleX = 4;
		bet_base.scaleY = 2;
		this.add(bet_base);

		// value_accelerator
		const value_accelerator = scene.add.image(-0.00001233816146850586, 0, "value-accelerator");
		value_accelerator.scaleX = 1.4;
		this.add(value_accelerator);

		// maxValue_txt
		const maxValue_txt = scene.add.text(-394, -45, "", {});
		maxValue_txt.setOrigin(0.5, 0.5);
		maxValue_txt.text = " MIN \n 10 ";
		maxValue_txt.setStyle({ "align": "center", "fontSize": "26px" });
		this.add(maxValue_txt);

		// minValue_txt
		const minValue_txt = scene.add.text(394, -45, "", {});
		minValue_txt.setOrigin(0.5, 0.5);
		minValue_txt.text = " MAX \n 200 ";
		minValue_txt.setStyle({ "align": "center", "fontSize": "26px" });
		this.add(minValue_txt);

		// minus_button
		const minus_button = scene.add.image(-394, 0, "minus-button");
		minus_button.scaleX = 0.7;
		minus_button.scaleY = 0.7;
		this.add(minus_button);

		// plus_button
		const plus_button = scene.add.image(394, 0, "plus-button");
		plus_button.scaleX = 0.7;
		plus_button.scaleY = 0.7;
		this.add(plus_button);

		// countdown_base
		const countdown_base = scene.add.image(0, -148, "countdown-base");
		countdown_base.scaleX = 2;
		this.add(countdown_base);

		// selected_stacks
		const selected_stacks = scene.add.text(1, -143, "", {});
		selected_stacks.setOrigin(0.5, 0.5);
		selected_stacks.text = "STACKS: 10";
		selected_stacks.setStyle({ "align": "center", "fontSize": "26px" });
		this.add(selected_stacks);

		// conform_button
		const conform_button = scene.add.image(0, 66, "conform-button");
		this.add(conform_button);

		// container_dragger
		const container_dragger = scene.add.container(-366, 0);
		this.add(container_dragger);

		// value_dragger
		const value_dragger = scene.add.image(0, 0, "value-dragger");
		container_dragger.add(value_dragger);

		this.minus_button = minus_button;
		this.plus_button = plus_button;
		this.selected_stacks = selected_stacks;
		this.conform_button = conform_button;
		this.value_dragger = value_dragger;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	minus_button;
	/** @type {Phaser.GameObjects.Image} */
	plus_button;
	/** @type {Phaser.GameObjects.Text} */
	selected_stacks;
	/** @type {Phaser.GameObjects.Image} */
	conform_button;
	/** @type {Phaser.GameObjects.Image} */
	value_dragger;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
