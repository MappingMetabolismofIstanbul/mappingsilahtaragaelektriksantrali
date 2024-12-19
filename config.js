var config = {
    // style: 'mapbox://styles/dogatmn/clyseydg9001201nu65sb3kb7',
    // leave commented to use Mapbox Standard Style
    style: 'mapbox://styles/dogatmn/cm4v9fem6000p01sf12f769y5',
    accessToken: 'pk.eyJ1IjoiZG9nYXRtbiIsImEiOiJjbHlyMTJmcXgwMjQ3MmtzbTRsdm1pejdsIn0.vcEjL7lt8OoOPMP5o1PM6g',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Kömür: Silahtarağa Elektrik Santrali',
    subtitle: '',
    byline: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    footer: 'BAP_Mapping Metabolism of Istanbul_Interactive Mapping / MEF AAP_027',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'centered',
            hidden: false,
            title: 'Silahtarağa Elektrik Santrali 1920',
            image: 'https://i.ibb.co/GTqFdKc/Ekran-g-r-nt-s-2024-12-19-173506.png',
            description: '',
            location: {
                center: [28.946, 41.067],
                zoom: 8.5,
                pitch: 60,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '1970 ’de Silahtarağa Elektrik Santrali’nin Rıhtım Vinci, Mavnası, Kömür Parkı ve Havai Hattı ',
            image: 'https://i.ibb.co/XsXyb7V/MEF-AAP-027-BAP-2024-12-19-14-16-08.jpg',
            description: 'Üretim için kullanılan kömürler Zonguldak’tan getirilir. Kaliteli taşkömürü Zonguldak limanlarından önce gemilerle Kuruçeşme kömür depolarına getirilir ve sac mavnalara yüklenir. Yüklenen mavnalar römorkörlerle çekilerek Haliç’e getirilip fabrikanın iskelesi ve rıhtımına nakledilir.  Rıhtıma indirilen kömürleri karaya aktarmak için rıhtım vinci kullanılır, alınan kömürler fabrikanın kömür parkına aktarılır. Kömür parkından raylı sistem ile alınan kömürler fabrikanın silolarına getirilir. ',
            location: {
                center: [28.946, 41.067],
                zoom: 12.52,
                pitch: 8,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Fabrika Yerleşkesine Kömür Taşıyan Vagonların Fotoğrafı, 1970',
            image: 'https://i.ibb.co/WgdTJ1f/MEF-AAP-027-BAP-2024-12-19-14-17-15.jpg',
            description: 'Yakılan kömür kazan borularını ısıtır, borulardaki su kızgın buhar haline getirilip buhar dairelerine bağlanan türbine aktarılır. Buhar türbin kanatlarına kuvvet uygulayarak türbinlerin dönmesini sağlar ve kazanılan dönme hareketi jeneratörlere iletilerek hareket enerjisi elektrik enerjisine dönüştürülür. Üretilen elektrik ilk önce 11 Şubat 1914’te İstanbul tramvaylarına ve üç gün sonra, Beyazıt, Tozkoparan ve İstinye’de bulunan üç indirici merkeze verilmeye başlanır. Ardından da enerji sanayi tesislerine, konut ve mağaza aydınlatmalarına verilir.  ',
            location: {
                center: [28.946, 41.067],
                zoom: 12.52,
                pitch: 8.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './assets/buenos-aires.jpg',
            description: 'Before the 1970s, the lignite coal mines of Ağaçlı, located between Terkos Lake and Kilyos in İstanbul, were used as a source for Silahtarağa Power Plant during the First World War in context of emergency and for the security of the Bosporus Strait (Akman and Köksal 2007, 36-37) for the safe travel of coal on land by railway from its source to the power plant. Open-pit mining activities needed excavations 100-120 meters deep, and the excavated material was poured into the nearest stream valley or the next mine quarry (Kantarcı 2005, 174). The railway known as the “Golden Horn-Black Sea Sahara Line,” following the Kağıthane Stream and Kemerburgaz, reached the lignite coal mines of Ağaçlı- İstanbul and was used for transportation of coal to Silahtarağa from 1915 to the mid- 1950s.',
            location: {
                center: [28.946, 41.067],
                zoom: 12.52,
                pitch: 8.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Şehirde Umumi Tenvirat Lambaları-İETT Dergisi, 1959',
            image: 'https://i.ibb.co/NyL27Vy/MEF-AAP-027-BAP-2024-12-19-14-20-26.jpg',
            description: '"İstanbul’daki sokak, cadde ve meydanlara konulan umumi tenvirat lambaları son senelerde geniş ölçüde arttırılmıştır. Aşağıdaki malumat, senelere göre bu artışı tespit etmektedir. Şehrimizde 1938 yılında umumi tenvirat lambası 3741 iken bu miktar 1945 senesinde 7885’e, 1949 yılında 11138’e çıkmıştır. 1950 yılında ise umumi tenvirat lambası adedi 12142’ye yükselmiştir. 1951’de 13053, 1952’de 15443, 1953’de 16843, 1954 senesinde 18815, 1958 yılında 19703’e, 1957 senesinde ise 20000’ne yükselmiştir."',
            location: {
                center: [28.946, 41.067],
                zoom: 12.52,
                pitch: 8.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
