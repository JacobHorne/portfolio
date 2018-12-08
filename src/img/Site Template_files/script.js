/* js file */

(function( window, undefined ){

var $container = $('#container');

var books = [
  { title: 'Nikola Tesla', url: 'http://amzn.to/1OE6YSa', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CATSONE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Lewis and Clark', url: 'http://amzn.to/1JgbBF9', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0194QVC7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0194QVC7A'},
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B008478VE8' },
  { title: 'Meditations', url: 'http://amzn.to/1OE7RtM', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00IMLL63O&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Lewis and Clark', url: 'http://amzn.to/1JgbBF9', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0194QVC7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0194QVC7A'},
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B008478VE8' },
  { title: 'Nikola Tesla', url: 'http://amzn.to/1OE6YSa', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CATSONE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Lewis and Clark', url: 'http://amzn.to/1JgbBF9', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0194QVC7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0194QVC7A'},
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B008478VE8' },
  { title: 'Meditations', url: 'http://amzn.to/1OE7RtM', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00IMLL63O&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20' },
  { title: 'Lewis and Clark', url: 'http://amzn.to/1JgbBF9', category: 'history', img:'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0194QVC7A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B0194QVC7A'},
  { title: 'Darwin', url: 'http://amzn.to/1P3HBgf', category: 'history', img: 'http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008478VE8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=thoughtsharkc-20" ></a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=thoughtsharkc-20&l=as2&o=1&a=B008478VE8' },
];

var populateBooks = function (filter) {
  var filteredBooks = books;
  var $a;
  var $img;
  
  $container.empty();
  
  if (filter) {
    filteredBooks = books.filter(function (book) {
      return book.category === filter;
    }); 
  }
  
  for (var i = 0; i < filteredBooks.length; i++) {
    $a = $('<a/>', {
      href: filteredBooks[i].url,
      //text: filteredBooks[i].title,
      class: 'book'
    });
    $img = $('<img/>', {
      src: filteredBooks[i].img
    })
    $a.append($img);
    $container.append($a);
  }
};

$('[data-filter]').on('click', function () {
  var filter = $(this).data('filter');
  populateBooks(filter);
});

populateBooks();


/*function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}*/


})( window, undefined );