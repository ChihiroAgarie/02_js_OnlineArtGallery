// スタート画面
$(function () {
    $('#clickBtn').on('click', () => {
        $('#nameArea_wrapper').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
    });
});


// 名前入力画面
$(function () {
    $('#nameBtn').on('click', () => {
        $('#contentsArea1').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
    });
});

$(function () {
    $(document).on('input', '#name', function (e) {
        $('#nameShow').text($('#name').val());
    });
});


// コンテンツ1→2
$(function () {
    $('#nextBtn1').on('click', () => {
        $('#contentsArea2').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
    });
});

// コンテンツ2→3
// clickToggleを設定
$.fn.clickToggle = function (a, b) {
    return this.each(function () {
        var clicked = false;
        $(this).on('click', function () {
            clicked = !clicked;
            if (clicked) {
                return a.apply(this, arguments);
            }
            return b.apply(this, arguments);
        });
    });
};

// ショッピングモール
$(function () {
    $('#building_1').on('click', () => {
        $('#contentsArea3').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
        $('#nextBtn3_1').clickToggle(function () {
            $('#place').text('はっ！もしかして・・あれは・・');
            $('#place2').text('私の・・推し・・！？');
            $('#nextBtn3_1').val('推しを選ぶ');
            $("#playMusic2").get(0).play();
        }, function () {
            $('#contentsArea3_2').css({ 'visibility': 'visible' });
            $("#playMusic2").get(0).play();
        });
    });
});

// コンビニ
$(function () {
    $('#building_2').on('click', () => {
        $('#contentsArea3').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
        $('#contentsArea3_img').css('background-image', 'url("./img/building_bg/convenience store.jpg")');
        $('#place').text('コンビニスイーツ買いに来たけど、ここに推しはいるのかしら・・？');
        $('#nextBtn3_1').clickToggle(function () {
            $('#place').text('はっ！もしかして・・あれは・・');
            $('#place2').text('私の・・推し・・！？');
            $('#nextBtn3_1').val('推しを選ぶ');
            $("#playMusic2").get(0).play();
        }, function () {
            $('#contentsArea3_2').css({ 'visibility': 'visible' });
            $("#playMusic2").get(0).play();
        });
    });
});

// 大阪城
$(function () {
    $('#building_3').on('click', () => {
        $('#contentsArea3').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
        $('#contentsArea3_img').css('background-image', 'url("./img/building_bg/Osaka Castle.jpg")');
        $('#place').text('大阪城はやっぱえぇわぁ〜。ここに推しはいるのかしら・・？');
        $('#nextBtn3_1').clickToggle(function () {
            $('#place').text('はっ！もしかして・・あれは・・');
            $('#place2').text('私の・・推し・・！？');
            $('#nextBtn3_1').val('推しを選ぶ');
            $("#playMusic2").get(0).play();
        }, function () {
            $('#contentsArea3_2').css({ 'visibility': 'visible' });
            $("#playMusic2").get(0).play();
        });
    });
});

// ピラミッド
$(function () {
    $('#building_4').on('click', () => {
        $('#contentsArea3').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
        $('#contentsArea3_img').css('background-image', 'url("./img/building_bg/pyramid.jpg")');
        $('#place').text('ピラミッドの大きさハンパねぇ〜！ここに推しはいるのかしら・・？');
        $('#nextBtn3_1').clickToggle(function () {
            $('#place').text('はっ！もしかして・・あれは・・');
            $('#place2').text('私の・・推し・・！？');
            $('#nextBtn3_1').val('推しを選ぶ');
            $("#playMusic2").get(0).play();
        }, function () {
            $('#contentsArea3_2').css({ 'visibility': 'visible' });
            $("#playMusic2").get(0).play();
        });
    });
});


// 野球場
$(function () {
    $('#building_5').on('click', () => {
        $('#contentsArea3').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
        $('#contentsArea3_img').css('background-image', 'url("./img/building_bg/baseball Ground.jpg")');
        $('#place').text('野球場で飲むビールうめぇ〜！ここに推しはいるのかしら・・？');
        $('#nextBtn3_1').clickToggle(function () {
            $('#place').text('はっ！もしかして・・あれは・・');
            $('#place2').text('私の・・推し・・！？');
            $('#nextBtn3_1').val('推しを選ぶ');
            $("#playMusic2").get(0).play();
        }, function () {
            $('#contentsArea3_2').css({ 'visibility': 'visible' });
            $("#playMusic2").get(0).play();
        });
    });
});

// 東京タワー
$(function () {
    $('#building_6').on('click', () => {
        $('#contentsArea3').css({ 'visibility': 'visible' });
        $("#playMusic2").get(0).play();
        $('#contentsArea3_img').css('background-image', 'url("./img/building_bg/tokyotower.jpg")');
        $('#place').text('東京タワーの高さは333m！ここに推しはいるのかしら・・？');
        $('#nextBtn3_1').clickToggle(function () {
            $('#place').text('はっ！もしかして・・あれは・・');
            $('#place2').text('私の・・推し・・！？');
            $('#nextBtn3_1').val('推しを選ぶ');
            $("#playMusic2").get(0).play();
        }, function () {
            $('#contentsArea3_2').css({ 'visibility': 'visible' });
            $("#playMusic2").get(0).play();
        });
    });
});

// コンテンツ3-2
// 画像の乱数を設定
const img01 = 'img/handsome/BTS V(テテ).jpeg';
const img02 = 'img/handsome/イ・ドンウク.jpeg';
const img03 = 'img/handsome/キムスヒョン.jpeg';
const img04 = 'img/handsome/キムソンホ.jpeg';
const img05 = 'img/handsome/キムドンヒ.jpeg';
const img06 = 'img/handsome/コン・ユ.jpeg';
const img07 = 'img/handsome/ソンガン.jpeg';
const img08 = 'img/handsome/ソンジュンギ.jpeg';
const img09 = 'img/handsome/チャ・ウヌ(ASTRO).jpeg';
const img10 = 'img/handsome/ナムジュヒョク.jpeg';
const img11 = 'img/handsome/パクソジュン.jpg';
const img12 = 'img/handsome/パクボゴム.jpeg';
const img13 = 'img/handsome/ヒョンビン.jpeg';

const images = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11,
    img12,
    img13
];

const randamImg = images[Math.floor(Math.random() * images.length)];

$('#handsome_imgA1').attr('src', randamImg);

// かぶらない画像を表示させる
if (randamImg == img01) {
    const index1 = images.indexOf(img01);
    images.splice(index1, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img02) {
    const index2 = images.indexOf(img02);
    images.splice(index2, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img03) {
    const index3 = images.indexOf(img03);
    images.splice(index3, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img04) {
    const index4 = images.indexOf(img04);
    images.splice(index4, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img05) {
    const index5 = images.indexOf(img05);
    images.splice(index5, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img06) {
    const index6 = images.indexOf(img06);
    images.splice(index6, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img07) {
    const index7 = images.indexOf(img07);
    images.splice(index7, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img08) {
    const index8 = images.indexOf(img08);
    images.splice(index8, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img09) {
    const index9 = images.indexOf(img09);
    images.splice(index9, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img10) {
    const index10 = images.indexOf(img10);
    images.splice(index10, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img11) {
    const index11 = images.indexOf(img11);
    images.splice(index11, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img12) {
    const index12 = images.indexOf(img12);
    images.splice(index12, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
} else if (randamImg == img13) {
    const index13 = images.indexOf(img13);
    images.splice(index13, 1);
    const randamImg = images[Math.floor(Math.random() * images.length)];
    $('#handsome_imgB1').attr('src', randamImg);
    console.log(images);
};

// シャッフルボタン
$(function () {
    $('#shuffleBtn').on('click', () => {
        const randamImg = images[Math.floor(Math.random() * images.length)];
        $('#handsome_imgA1').attr('src', randamImg);
        $("#playMusic2").get(0).play();
        if (randamImg == img01) {
            const index1 = images.indexOf(img01);
            images.splice(index1, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img02) {
            const index2 = images.indexOf(img02);
            images.splice(index2, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img03) {
            const index3 = images.indexOf(img03);
            images.splice(index3, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img04) {
            const index4 = images.indexOf(img04);
            images.splice(index4, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img05) {
            const index5 = images.indexOf(img05);
            images.splice(index5, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img06) {
            const index6 = images.indexOf(img06);
            images.splice(index6, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img07) {
            const index7 = images.indexOf(img07);
            images.splice(index7, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img08) {
            const index8 = images.indexOf(img08);
            images.splice(index8, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img09) {
            const index9 = images.indexOf(img09);
            images.splice(index9, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img10) {
            const index10 = images.indexOf(img10);
            images.splice(index10, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img11) {
            const index11 = images.indexOf(img11);
            images.splice(index11, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img12) {
            const index12 = images.indexOf(img12);
            images.splice(index12, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        } else if (randamImg == img13) {
            const index13 = images.indexOf(img13);
            images.splice(index13, 1);
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgB1').attr('src', randamImg);
            console.log(images);
        };
        $('#shuffleBtn').clickToggle(function () {
            const randamImg = images[Math.floor(Math.random() * images.length)];
            $('#handsome_imgA1').attr('src', randamImg);
            $("#playMusic2").get(0).play();
            if (randamImg == img01) {
                const index1 = images.indexOf(img01);
                images.splice(index1, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img02) {
                const index2 = images.indexOf(img02);
                images.splice(index2, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img03) {
                const index3 = images.indexOf(img03);
                images.splice(index3, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img04) {
                const index4 = images.indexOf(img04);
                images.splice(index4, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img05) {
                const index5 = images.indexOf(img05);
                images.splice(index5, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img06) {
                const index6 = images.indexOf(img06);
                images.splice(index6, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img07) {
                const index7 = images.indexOf(img07);
                images.splice(index7, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img08) {
                const index8 = images.indexOf(img08);
                images.splice(index8, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img09) {
                const index9 = images.indexOf(img09);
                images.splice(index9, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img10) {
                const index10 = images.indexOf(img10);
                images.splice(index10, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img11) {
                const index11 = images.indexOf(img11);
                images.splice(index11, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img12) {
                const index12 = images.indexOf(img12);
                images.splice(index12, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            } else if (randamImg == img13) {
                const index13 = images.indexOf(img13);
                images.splice(index13, 1);
                const randamImg = images[Math.floor(Math.random() * images.length)];
                $('#handsome_imgB1').attr('src', randamImg);
                console.log(images);
            };
        });
    });
});

// コンテンツ3-3
// クリックで表示
$('#handsome_imgA1, #handsome_imgB1').click(function () {
    $('#contentsArea3_3').css({ 'visibility': 'visible' });
    $("#playMusic1").get(0).play();
});

// クリックした画像・文章に変更
$(function () {
    $('#handsome_imgA1').on('click', () => {
        const src = $('#handsome_imgA1').attr('src');
        $('#chosen_handsome').attr('src', src);
        const src1 = $('#chosen_handsome').attr('src');
        if (src1 == img01) {
            $('#handsome_name').text('BTS V（テテ）');
            $('#handsome_text').html('BTSのイケメン担当。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('Dynamite<br>Butter<br>Boy With Luv');
        } else if (src1 == img02) {
            $('#handsome_name').text('イ・ドンウク');
            $('#handsome_text').html('トッケビでの死神役が最高！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('トッケビ<br>真心が届く<br>女の香り');
        } else if (src1 == img03) {
            $('#handsome_name').text('キム・スヒョン');
            $('#handsome_text').html('新・韓流四天王の1人だそう！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('サイコだけど大丈夫<br>星から来たあなた<br>ドリームハイ');
        } else if (src1 == img04) {
            $('#handsome_name').text('キム・ソンホ');
            $('#handsome_text').html('優しい目がたまらん。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('スタートアップ<br>君のせいで何もできない！<br>100日の朗君様');
        } else if (src1 == img05) {
            $('#handsome_name').text('キム・ドンヒ');
            $('#handsome_text').html('人気急上昇中の若手俳優！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('梨泰院クラス<br>人間レッスン<br>SKYキャッスル');
        } else if (src1 == img06) {
            $('#handsome_name').text('コン・ユ');
            $('#handsome_text').html('こんなイケオジいたら惚れちゃう。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('トッケビ<br>コーヒープリンス1号店<br>ビッグ');
        } else if (src1 == img07) {
            $('#handsome_name').text('ソン・ガン');
            $('#handsome_text').html('甘いマスクがたまらん。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('わかっていても<br>ナビレラ<br>恋するアプリ Love Alarm');
        } else if (src1 == img08) {
            $('#handsome_name').text('ソン・ジュンギ');
            $('#handsome_text').html('可愛い＆かっこいいのハイブリッド。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('ヴィンチェンツォ<br>太陽の末裔<br>トキメキ☆成均館スキャンダル');
        } else if (src1 == img09) {
            $('#handsome_name').text('ASTRO チャ・ウヌ');
            $('#handsome_text').html('まじで顔面国宝！！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('HIDE&SEEK<br>Again<br>Crazy Sexy Cool');
        } else if (src1 == img10) {
            $('#handsome_name').text('ナム・ジュヒョク');
            $('#handsome_text').html('笑顔が素敵なのよ・・。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('スタートアップ<br>恋のゴールドメダル<br>ハベクの新婦');
        } else if (src1 == img11) {
            $('#handsome_name').text('パク・ソジュン');
            $('#handsome_text').html('言わずと知れた超人気俳優！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('梨泰院クラス<br>彼女はキレイだった<br>キム秘書はいったい、なぜ?');
        } else if (src1 == img12) {
            $('#handsome_name').text('パク・ボゴム');
            $('#handsome_text').html('なんて整ったお顔なのでしょうか・・。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('青春の記録<br>雲が描いた月明かり<br>ボーイフレンド');
        } else if (src1 == img13) {
            $('#handsome_name').text('ヒョンビン');
            $('#handsome_text').html('世界的俳優の一人。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('愛の不時着<br>シークレット・ガーデン<br>ジキルとハイドに恋した私');
        }
        return false;

    });
});

$(function () {
    $('#handsome_imgB1').on('click', () => {
        const src2 = $('#handsome_imgB1').attr('src');
        $('#chosen_handsome').attr('src', src2);
        const src3 = $('#chosen_handsome').attr('src');
        if (src3 == img01) {
            $('#handsome_name').text('BTS V（テテ）');
            $('#handsome_text').html('BTSのイケメン担当。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('Dynamite<br>Butter<br>Boy With Luv');
        } else if (src3 == img02) {
            $('#handsome_name').text('イ・ドンウク');
            $('#handsome_text').html('トッケビでの死神役が最高！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('トッケビ<br>真心が届く<br>女の香り');
        } else if (src3 == img03) {
            $('#handsome_name').text('キム・スヒョン');
            $('#handsome_text').html('新・韓流四天王の1人だそう！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('サイコだけど大丈夫<br>星から来たあなた<br>ドリームハイ');
        } else if (src3 == img04) {
            $('#handsome_name').text('キム・ソンホ');
            $('#handsome_text').html('優しい目がたまらん。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('スタートアップ<br>君のせいで何もできない！<br>100日の朗君様');
        } else if (src3 == img05) {
            $('#handsome_name').text('キム・ドンヒ');
            $('#handsome_text').html('人気急上昇中の若手俳優！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('梨泰院クラス<br>人間レッスン<br>SKYキャッスル');
        } else if (src3 == img06) {
            $('#handsome_name').text('コン・ユ');
            $('#handsome_text').html('こんなイケオジいたら惚れちゃう。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('トッケビ<br>コーヒープリンス1号店<br>ビッグ');
        } else if (src3 == img07) {
            $('#handsome_name').text('ソン・ガン');
            $('#handsome_text').html('甘いマスクがたまらん。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('わかっていても<br>ナビレラ<br>恋するアプリ Love Alarm');
        } else if (src3 == img08) {
            $('#handsome_name').text('ソン・ジュンギ');
            $('#handsome_text').html('可愛い＆かっこいいのハイブリッド。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('ヴィンチェンツォ<br>太陽の末裔<br>トキメキ☆成均館スキャンダル');
        } else if (src3 == img09) {
            $('#handsome_name').text('ASTRO チャ・ウヌ');
            $('#handsome_text').html('まじで顔面国宝！！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('HIDE&SEEK<br>Again<br>Crazy Sexy Cool');
        } else if (src3 == img10) {
            $('#handsome_name').text('ナム・ジュヒョク');
            $('#handsome_text').html('笑顔が素敵なのよ・・。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('スタートアップ<br>恋のゴールドメダル<br>ハベクの新婦');
        } else if (src3 == img11) {
            $('#handsome_name').text('パク・ソジュン');
            $('#handsome_text').html('言わずと知れた超人気俳優！<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('梨泰院クラス<br>彼女はキレイだった<br>キム秘書はいったい、なぜ?');
        } else if (src3 == img12) {
            $('#handsome_name').text('パク・ボゴム');
            $('#handsome_text').html('なんて整ったお顔なのでしょうか・・。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('青春の記録<br>雲が描いた月明かり<br>ボーイフレンド');
        } else if (src3 == img13) {
            $('#handsome_name').text('ヒョンビン');
            $('#handsome_text').html('世界的俳優の一人。<br>まじでかっこいい。<br>かっこいい。');
            $('#handsome_work_text').html('愛の不時着<br>シークレット・ガーデン<br>ジキルとハイドに恋した私');
        }
        return false;
    });
});

// もう1回最初に戻るボタン
$(function () {
    $('#againBtn').on('click', () => {
        $('#contentsArea3_3 a').attr('href', 'index.html');
        $("#playMusic2").get(0).play();
    });
});