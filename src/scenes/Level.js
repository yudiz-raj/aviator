
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.tileSprite(540, 1920, 720, 2950, "background");
		background.scaleX = 1.5;
		background.scaleY = 1.5;
		background.setOrigin(0.5, 1);

		// plane
		const plane = this.add.image(570, 1157, "plane");

		// play_button
		const play_button = this.add.image(540, 960, "play-button");
		play_button.scaleX = 5;
		play_button.scaleY = 5;

		// container_betsAdder
		const container_betsAdder = this.add.container(0, 0);

		// bet_base
		const bet_base = this.add.image(540, 1669, "bet-base");
		bet_base.scaleX = 5.3;
		bet_base.scaleY = 4;
		bet_base.alpha = 0.9;
		bet_base.alphaTopLeft = 0.9;
		bet_base.alphaTopRight = 0.9;
		bet_base.alphaBottomLeft = 0.9;
		bet_base.alphaBottomRight = 0.9;
		container_betsAdder.add(bet_base);

		// betAdd_button
		const betAdd_button = this.add.image(1027, 1454, "betAdd-button");
		container_betsAdder.add(betAdd_button);

		// countdown_base
		const countdown_base = this.add.image(540, 1379, "countdown-base");
		countdown_base.scaleX = 4;
		countdown_base.scaleY = 2;
		container_betsAdder.add(countdown_base);

		// instruction_txt
		const instruction_txt = this.add.text(540, 1386, "", {});
		instruction_txt.setOrigin(0.5, 0.5);
		instruction_txt.text = " PLACE BETS 3 ";
		instruction_txt.setStyle({ "align": "center", "fontSize": "42px", "fontStyle": "bold italic" });
		container_betsAdder.add(instruction_txt);

		// container_bets
		const container_bets = this.add.container(0, 0);

		// container_valueSelecter
		const container_valueSelecter = this.add.container(0, 0);

		// container_lockedBets
		const container_lockedBets = this.add.container(0, 0);

		// message_txt
		const message_txt = this.add.text(540, 1760, "", {});
		message_txt.setOrigin(0.5, 0.5);
		message_txt.visible = false;
		message_txt.tintFill = true;
		message_txt.tintBottomLeft = 8700130;
		message_txt.tintBottomRight = 8700130;
		message_txt.text = " BETS ARE \n NOT AVAILABLE ";
		message_txt.setStyle({ "align": "center", "fontSize": "64px", "fontStyle": "bold italic" });

		// container_sideMap
		const container_sideMap = this.add.container(0, 0);

		// blue_side_map
		const blue_side_map = this.add.image(971, 746, "blue-side-map");
		blue_side_map.scaleX = 2;
		blue_side_map.scaleY = 2;
		container_sideMap.add(blue_side_map);

		// green_side_map
		const green_side_map = this.add.image(863, 1359, "green-side-map");
		green_side_map.scaleX = 2;
		green_side_map.scaleY = 2;
		green_side_map.setOrigin(0, 1);
		green_side_map.visible = false;
		container_sideMap.add(green_side_map);

		// sideMap_plane
		const sideMap_plane = this.add.image(988, 1349, "plane");
		sideMap_plane.scaleX = 0.1;
		sideMap_plane.scaleY = 0.1;
		container_sideMap.add(sideMap_plane);

		// container_profile
		const container_profile = this.add.container(0, 0);

		this.background = background;
		this.plane = plane;
		this.play_button = play_button;
		this.betAdd_button = betAdd_button;
		this.instruction_txt = instruction_txt;
		this.container_betsAdder = container_betsAdder;
		this.container_bets = container_bets;
		this.container_valueSelecter = container_valueSelecter;
		this.container_lockedBets = container_lockedBets;
		this.message_txt = message_txt;
		this.green_side_map = green_side_map;
		this.sideMap_plane = sideMap_plane;
		this.container_profile = container_profile;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	background;
	/** @type {Phaser.GameObjects.Image} */
	plane;
	/** @type {Phaser.GameObjects.Image} */
	play_button;
	/** @type {Phaser.GameObjects.Image} */
	betAdd_button;
	/** @type {Phaser.GameObjects.Text} */
	instruction_txt;
	/** @type {Phaser.GameObjects.Container} */
	container_betsAdder;
	/** @type {Phaser.GameObjects.Container} */
	container_bets;
	/** @type {Phaser.GameObjects.Container} */
	container_valueSelecter;
	/** @type {Phaser.GameObjects.Container} */
	container_lockedBets;
	/** @type {Phaser.GameObjects.Text} */
	message_txt;
	/** @type {Phaser.GameObjects.Image} */
	green_side_map;
	/** @type {Phaser.GameObjects.Image} */
	sideMap_plane;
	/** @type {Phaser.GameObjects.Container} */
	container_profile;

	/* START-USER-CODE */

	// Write more your code here
	setSideMap = () => {
		this.isDistanceCover1 = false;
		this.isDistanceCover2 = false;
		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isDistanceCover1 = true;
		});

		this.innerBarHeight = this.green_side_map.displayHeight;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.green_side_map.x,
			this.green_side_map.y,
			this.green_side_map.displayWidth,
			this.green_side_map.displayHeight
		);

		console.log(this.maskGraphics);
		this.green_side_map.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 100000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.green_side_map.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			this.sideMap_plane.y = 1349 + this.innerBarHeight * currentProgress;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.green_side_map.x,
				this.green_side_map.y,
				this.green_side_map.displayWidth,
				this.innerBarHeight * currentProgress
			);
			currentInterval--;
			if (currentProgress >= 1) {
				clearInterval(this.progressInterval);
				this.isDistanceCover2 = true;
			}
		};

		this.progressInterval = setInterval(updateProgressBar, intervalDuration);
	}
	setProfile = () => {
		this.profile = new Profile(this, 65, 65);
		this.container_profile.add(this.profile);
		this.profile.setProfile("iuohf345", 7000);
		const shape = this.make.graphics();
		shape.fillCircle(65, 64, 45);
		const ProfileMask = shape.createGeometryMask();
		this.profile.profile_image.setMask(ProfileMask);
	}
	startPlaneAnimation = () => {
		console.log("plane");
		this.planeTweenForX = this.tweens.add({
			targets: this.plane,
			scaleY: 1.03,
			duration: 100,
			yoyo: true,
			onComplete: () => {
				this.planeTweenForY = this.tweens.add({
					targets: this.plane,
					scaleX: 1.03,
					duration: 100,
					yoyo: true,
					onComplete: () => {
						this.planeTweenForX.play();
					}
				});
			}
		})
	}
	planeFlyAnimation = () => {
		this.tweens.add({
			targets: this.plane,
			y: 400,
			duration: 1000,
			yoyo: true,
		})
	}
	create() {
		this.editorCreate();
		this.isGameStart = false;
		this.nMultiplier = 1;
		this.play_button.setInteractive();
		this.play_button.on('pointerdown', () => {
			this.betAdd_button.setInteractive();
			this.play_button.destroy();
			this.startBetSelection();
		})
		this.betAdd_button.on("pointerdown", () => {
			if (this.container_bets.list.length < 3) {
				this.addBet();
			}
		});
		this.setProfile();
	}
	addBet = () => {
		const bet = new Bet(this, 200 + this.container_bets.list.length * 350, 1690);
		this.container_bets.add(bet);
		bet.stake_base.setInteractive();
		bet.stake_base.on('pointerdown', () => {
			this.betAdd_button.disableInteractive();
			if (this.container_valueSelecter.list.length == 0) {
				let nSelectedValue = 10;
				const valueSelecter = new BetValueAdder(this, 540, 1426);
				this.container_valueSelecter.add(valueSelecter);
				valueSelecter.conform_button.setInteractive();
				valueSelecter.conform_button.on('pointerdown', () => {
					const [txt, value] = valueSelecter.selected_stacks.text.split(": ").map(Number);
					bet.stake_value.setText(value);
					valueSelecter.destroy();
					this.betAdd_button.setInteractive();
				})
				valueSelecter.minus_button.setInteractive();
				valueSelecter.minus_button.on('pointerdown', () => {
					if (nSelectedValue > 10) {
						nSelectedValue -= 10;
						valueSelecter.value_dragger.x -= 38;
					}
					valueSelecter.selected_stacks.setText(`STACKS: ${nSelectedValue}`);
				})
				valueSelecter.plus_button.setInteractive();
				valueSelecter.plus_button.on('pointerdown', () => {
					if (nSelectedValue < 200) {
						nSelectedValue += 10;
						valueSelecter.value_dragger.x += 38;
					}
					valueSelecter.selected_stacks.setText(`STACKS: ${nSelectedValue}`);
				})
				valueSelecter.value_dragger.setInteractive();
				this.input.setDraggable(valueSelecter.value_dragger);
				this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
					dragX = Math.min(Math.max(0, dragX), 725);
					gameObject.x = dragX;
					valueSelecter.selected_stacks.setText(`STACKS: ${nSelectedValue}`);
				});
			}
		})
	}
	startBetSelection = () => {
		let [txt, countDown] = this.instruction_txt.text.split('S ').map(Number);
		this.timeInterval = setInterval(() => {
			if (countDown == 7) this.startPlaneAnimation();
			if (countDown > 0) {
				countDown--;
				this.instruction_txt.setText(` PLACE BETS ${countDown} `);
			}
			else {
				this.container_bets.list.forEach((bet) => {
					this.profile.balance.setText(Number(this.profile.balance.text) - Number(bet.stake_value.text));
				});
				this.isGameStart = true;
				clearInterval(this.timeInterval);
				this.betAdd_button.disableInteractive();
				this.container_betsAdder.y += 150;
				this.instruction_txt.setText("LOCKED BETS")
				this.container_bets.setVisible(false);
				this.betAdd_button.setVisible(false);
				this.container_bets.list.forEach((bet, index) => {
					const lockedBet = new LockedBet(this, this.container_bets.list[index].x, this.container_bets.list[index].y + 60);
					lockedBet.ejectValue_txt.setText(` ${this.container_bets.list[index].stake_value.text} `).setName(`${this.container_bets.list[index].stake_value.text}`);
					this.container_lockedBets.add(lockedBet);
					lockedBet.eject_base.setInteractive();
					lockedBet.eject_base.on('pointerdown', () => {
						if (this.isGameStart && lockedBet.eject_base.texture.key == "red-base") {
							lockedBet.eject_base.setTexture("green-base");
							lockedBet.eject_txt_img.setTexture("ejected-txt-img");
							this.profile.balance.setText(Number(this.profile.balance.text) + Number(lockedBet.ejectValue_txt.text));
						}
					});
				})
				if (!this.container_bets.list.length) {
					this.message_txt.setVisible(true);
				}
				this.planeFlyAnimation();
				this.setSideMap();
				this.setMultiplier(500);
				this.destroyPlane(20000);
			}
		}, 1000);
	}
	setMultiplier = (timer) => {
		this.multiplierIntervel = setInterval(() => {
			this.nMultiplier += 1;
			if (this.container_lockedBets.list.length) {
				this.container_lockedBets.list.forEach(lockedBet => {
					if (this.isGameStart && lockedBet.eject_base.texture.key == "red-base") {
						lockedBet.ejectValue_txt.setText(` ${Number(lockedBet.ejectValue_txt.name) + this.nMultiplier} `);
					}
				});
			}
		}, timer);
	}
	destroyPlane = (destroyTime) => {
		setTimeout(() => {
			this.plane.destroy();
			this.isGameStart = false;
			clearInterval(this.progressInterval);
		}, destroyTime);
	}
	update() {
		if (this.isGameStart) {
			this.background.tilePositionY -= 10;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
