
// You can write more code here

/* START OF COMPILED CODE */

class Profile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? -1);

		// profile_image
		const profile_image = scene.add.image(0, 0, "profile");
		profile_image.scaleX = 0.45;
		profile_image.scaleY = 0.45;
		this.add(profile_image);

		// profile_base
		const profile_base = scene.add.image(0, 0, "profile-base");
		this.add(profile_base);

		// profile_name
		const profile_name = scene.add.text(125, -21, "", {});
		profile_name.setOrigin(0.5, 0.5);
		profile_name.text = "otiyugjf";
		profile_name.setStyle({ "fontSize": "32px" });
		this.add(profile_name);

		// balance
		const balance = scene.add.text(125, 21, "", {});
		balance.setOrigin(0.5, 0.5);
		balance.text = "9000";
		balance.setStyle({ "fontSize": "32px" });
		this.add(balance);

		this.profile_image = profile_image;
		this.profile_name = profile_name;
		this.balance = balance;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	profile_image;
	/** @type {Phaser.GameObjects.Text} */
	profile_name;
	/** @type {Phaser.GameObjects.Text} */
	balance;

	/* START-USER-CODE */

	// Write your code here.
	setProfile = (name, value) => {
		this.profile_name.setText(name);
		this.balance.setText(value);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
