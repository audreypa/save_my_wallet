import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  connect() {
    console.log(this)
    const config = {
    type: Phaser.AUTO,
    width: 360,
    height: 730,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 10 },
      }
    },
    scene: {
      preload: this.preload,
      create: this.create,
      update: this.update
  }
  };
    const game = new Phaser.Game(config);
    this.element.appendChild(game.canvas);
    game.scene.start();


  }


    preload() {

      //littlePig

      this.load.image('piggy', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688546467/littlepig_akphfx.png' )
      //Background image
      this.load.image('background', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688389322/background_lkij73.jpg');

      // level 1
      this.load.image('store 1', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395588/store_1_kwsoho.png');
      this.load.image('food 1', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395488/bakery_zvmuom.png');
      this.load.image('medical 1', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395523/pharmacy_hhfxuv.png');
      this.load.image('income 1', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688472500/city_hall_o46p0r.png');
      this.load.image('hobbies 1', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688472565/museum_pnz2x2.png');
      this.load.image('bank 1', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688473204/bank_mf8px2.png');
      this.load.image('travel 1', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395560/hotel_ttlbwy.png');

      // level 2
      this.load.image('store 2', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395583/shop_2_qajrkd.png');
      this.load.image('food 2', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395561/pizzeria_j6nz4z.png');
      this.load.image('medical 2', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395511/hospital_cf8bep.png');
      this.load.image('income 2', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688472519/city_hall_3_sndt8u.png');
      this.load.image('hobbies 2', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688472576/theatre_ebnpwc.png');
      this.load.image('bank 2', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688473195/bank_3_plwpx4.png');
      this.load.image('travel 2', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688473295/airport_2_tqxgum.png');

      // level 3
      // Get image from de active record base in building


      this.load.image('store 3', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395576/the_mall_pxwotq.png');
      this.load.image('food 3', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395545/pizza_beahc_dvzxxc.png');
      this.load.image('medical 3', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688395511/hospital_cf8bep.png');
      this.load.image('income 3', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688472504/city_hall_2_doyiod.png');
      this.load.image('hobbies 3', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688472508/cinema_ttmqoa.png');
      this.load.image('bank 3', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688472627/bank_2_wid8tf.png');
      this.load.image('travel 3', 'https://res.cloudinary.com/dgyeheb95/image/upload/v1688472592/airport_t5kzxf.png');
    }

    create() {


      //Background image
      const backgroundImage = this.add.image(180, 365, 'background');
      backgroundImage.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

      //piggy
      const piggy = this.add.sprite(200, 650, 'piggy');
      piggy.setDisplaySize(80, 80);





      // level 1
      /*       const store1 = this.add.image(225,450, 'store 1').setDisplaySize(100, 80);
      store1;
      */
     const food1 = this.add.image(160,300, 'food 1').setDisplaySize(100, 80);
     food1;

      const medical1 = this.add.image(75,220, 'medical 1').setDisplaySize(100, 80);
      medical1;

/*       const income1 = this.add.image(290,220, 'income 1').setDisplaySize(120, 100);
      income1;
 */
      const hobbies1 = this.add.image(290,550, 'hobbies 1').setDisplaySize(100, 80);
      hobbies1;

      const bank1 = this.add.image(90,550, 'bank 1').setDisplaySize(100, 80);
      bank1;

      // const travel1 = this.add.image(225,65, 'travel 1').setDisplaySize(100, 80);
      // travel1;

      // level 2
      const store2 = this.add.image(225,450, 'store 2').setDisplaySize(105, 85);
      store2;

/*       const food2 = this.add.image(160,300, 'food 2').setDisplaySize(105, 85);
      food2;
 */
/*       const medical2 = this.add.image(75,210, 'medical 2').setDisplaySize(105, 85);
      medical2;
 */
      const income2 = this.add.image(290,210, 'income 2').setDisplaySize(125, 105);
      income2;

/*       const hobbies2 = this.add.image(290,540, 'hobbies 2').setDisplaySize(105, 85);
      hobbies2;
 */
/*       const bank2 = this.add.image(90,550, 'bank 2').setDisplaySize(105, 85);
      bank2;
 */
      const travel2 = this.add.image(225,65, 'travel 2').setDisplaySize(120, 85);
      travel2;

      // level 3
/*       const store3 = this.add.image(225,450, 'store 3').setDisplaySize(110, 90);
      store3;

      const food3 = this.add.image(160,300, 'food 3').setDisplaySize(110, 90);
      food3;

      const medical3 = this.add.image(75,220, 'medical 3').setDisplaySize(110, 90);
      medical3;

      const income3 = this.add.image(290,220, 'income 3').setDisplaySize(130, 110);
      income3;

      const hobbies3 = this.add.image(290,550, 'hobbies 3').setDisplaySize(120, 80);
      hobbies3;

      const bank3 = this.add.image(90,550, 'bank 3').setDisplaySize(110, 90);
      bank3;

      const travel3 = this.add.image(225,65, 'travel 3').setDisplaySize(150, 90);
      travel3;

    */



  }



    update() {
    }

}
