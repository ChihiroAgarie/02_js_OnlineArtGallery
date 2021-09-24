//画像配列
const ImgList = [
    { url: 'img/artworks/img01.jpeg', title: 'モナ・リザ', artist: 'レオナルド・ダ・ヴィンチ' },
    { url: 'img/artworks/img02.jpeg', title: '牛乳を注ぐ女', artist: 'ヨハネス・フェルメール' },
    { url: 'img/artworks/img03.jpeg', title: '春（ラ・プリマヴェーラ）', artist: 'サンドロ・ボッティチェリ' },
    { url: 'img/artworks/img04.jpeg', title: '民衆を導く自由の女', artist: 'ウジェーヌ・ドラクロワ' },
    { url: 'img/artworks/img05.jpeg', title: '富嶽三十六景 神奈川沖浪裏', artist: '葛飾北斎' },
    { url: 'img/artworks/img06.jpeg', title: '落穂拾い', artist: 'ジャン＝フランソワ・ミレー' },
    { url: 'img/artworks/img07.jpeg', title: '印象 日の出', artist: 'クロード・モネ' },
    { url: 'img/artworks/img08.jpeg', title: 'バレエのレッスン', artist: 'エドガー・ドガ' },
    { url: 'img/artworks/img09.jpeg', title: '考える人', artist: 'オーギュスト・ロダン' },
    { url: 'img/artworks/img10.jpeg', title: 'ゲルニカ', artist: 'パブロ・ピカソ' },
    { url: 'img/artworks/img11.jpeg', title: 'ひまわり', artist: 'フィンセント・ファン・ゴッホ' },
    { url: 'img/artworks/img12.jpeg', title: '緑の筋のあるマティス夫人の肖像', artist: 'アンリ・マティス' },
    { url: 'img/artworks/img13.jpeg', title: '接吻', artist: 'グスタフ・クリムト' },
    { url: 'img/artworks/img14.jpeg', title: '記憶の固執（柔らかい時計）', artist: 'サルバドール・ダリ' },
    { url: 'img/artworks/img15.jpeg', title: '泉', artist: 'マルセル・デュシャン' },
    { url: 'img/artworks/img16.jpeg', title: '夜警', artist: 'レンブラント' },
    { url: 'img/artworks/img17.jpeg', title: 'ピードロを吹く娘', artist: '喜多川歌麿' },
    { url: 'img/artworks/img18.jpeg', title: '真珠の耳飾りの少女', artist: 'ヨハネス・フェルメール' },
    { url: 'img/artworks/img19.jpeg', title: '最後の晩餐', artist: 'レオナルド・ダ・ヴィンチ' },
    { url: 'img/artworks/img20.jpeg', title: 'バベルの塔', artist: 'ピーテル・ブリューゲル' },
];
console.log(ImgList);

// 画像を表示
let output = '';
for (let i = 0; i < ImgList.length; i++) {
    output += `<img src="${ImgList[i].url}" alt=""></img>`;
    $('#artworks').html(output);
};

// 画像クリック時
$('#artworks img').on('click', function () {
    // 画像をグレーに
    $(this).css("filter", "grayscale(100%)");

    // クリックした要素のデータを抽出
    const src = $(this).attr('src');
    console.log(src);

    const url = src;
    const target = ImgList.find((v) => v.url === url);
    console.log(target);

    const title = target.title;
    console.log(title);

    const artist = target.artist;
    console.log(artist);

    const data = [
        { "imgsrc": src, "title": title, "artist": artist }
    ];
    console.log(data);
    console.log(title);

    // クリックしたデータを保存
    const jsonData = JSON.stringify(data);
    localStorage.setItem('memo', jsonData);
    console.log(jsonData);

    // ページ読み込み：保存データ取得表示
    if (localStorage.getItem('memo')) { // 値が保存されていれば
        const json_get = localStorage.getItem('memo');
        const data_get = JSON.parse(json_get);
        console.log(data_get);

        $('#f_artworks').append(`<img src="${src}" alt=""></img>`);

        // ポップアップ
        $('#f_artworks img').on('click', function () {
            $('.popup').css("visibility", "visible");
            $('.popup').addClass('showpop').fadeIn();

            const src2 = $(this).attr('src');
            console.log(src2);

            const url2 = src2;
            const target = ImgList.find((v) => v.url === url2);
            console.log(target);

            const title2 = target.title;
            console.log(title2);

            const artist2 = target.artist;
            console.log(artist2);

            $('.content img').attr('src', src2);
            $('#art_title').html(`<p>${title2}</p>`);
            $('#art_artist').html(`<p>${artist2}</p>`);
        });

        $('#close').on('click', function () {
            $('.popup').fadeOut();
        });
    }
});

// スクロールで画面下お気に入りボタン表示
$(function () {
    var fBtn = $('#addBtn_area');
    fBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            fBtn.fadeIn();
        } else {
            fBtn.fadeOut();
        }
    });
});

// 画面下お気に入りボタン　クリックイベント
$(function () {
    $('#addBtn').on('click', function () {
        $('#favorits').css("visibility", "visible");
        $('#inner').css("display", "none");
        $('#addBtn_area').css("visibility", "hidden");
        $('body, html').animate({ scrollTop: 0 }, 0);
        $('#title_wrapper a').text('TOP');
        $('main').css("background-image", "url(./img/favorite_image.jpg)");
        $('main p').html('あなた専用のギャラリーページです<br>心ゆくまでお楽しみください');
    });
});
