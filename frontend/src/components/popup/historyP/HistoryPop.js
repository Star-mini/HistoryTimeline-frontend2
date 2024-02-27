import History from './HistoryPoPComponent/History';
import HistoryCom from './HistoryPoPComponent/HistoryCom';
import Movie from './HistoryPoPComponent/Movie';
import MovieCom from './HistoryPoPComponent/MovieCom';


const movies = [
  {
    title: "서울의 봄 (2023)",
    imageUrl: "https://img.movist.com/?img=/x00/05/96/41_p1.jpg"
  },
  {
    title: "남산의 부장들 (2020)",
    imageUrl: "https://img.movist.com/?img=/x00/05/24/83_p1.jpg"
  },
  {
    title: "택시운전사 (2017)",
    imageUrl: "https://img.movist.com/?img=/x00/04/81/75_p1.jpg"
  },
  {
    title: "1987 (2017)",
    imageUrl: "https://img.movist.com/?img=/x00/04/93/47_p1.jpg"
  }
];

const historyData = {
  imageUrl: "https://upload.wikimedia.org/wikipedia/ko/2/2a/12%C2%B712_%EA%B5%B0%EC%82%AC%EB%B0%98%EB%9E%80_%EC%A3%BC%EB%8F%99%EC%9E%90.jpeg",
  content: [
      "Irure incididunt magna incididunt adipisicing nostrud exercitation consectetur non tempor. Reprehenderit cillum sint Lorem sunt labore magna. Labore cillum nulla laboris ex nostrud sit cillum. Magna consectetur adipisicing et nostrud pariatur pariatur. Veniam Lorem ea cupidatat ea qui laborum in proident nulla.",
      "Fugiat ex elit pariatur irure occaecat. Voluptate occaecat consectetur ad aliquip quis tempor. Velit laboris do et eu nisi amet aliquip. Consectetur laboris reprehenderit commodo sint eiusmod laborum in. Excepteur consequat ut id nisi cillum sunt nisi eu ad laborum duis. Sunt Lorem esse cillum cillum nulla et occaecat Lorem reprehenderit minim consequat laborum reprehenderit consectetur.",
      "Do cillum consectetur officia duis ex sit adipisicing laborum aliquip nulla deserunt sunt nostrud. Voluptate dolor tempor nisi proident anim. Sint occaecat et deserunt eiusmod non sit Lorem velit ut occaecat. Exercitation elit ut duis fugiat eiusmod duis ullamco aliquip. Fugiat velit exercitation elit eiusmod minim laborum consectetur et adipisicing cillum.",
      "Ullamco do eu do Lorem commodo ullamco voluptate veniam. Elit nulla pariatur occaecat ex. Est commodo pariatur in ad ad id sit sint occaecat labore. Do laboris aliquip adipisicing amet laborum. Est qui aute anim nulla aliquip amet dolore est. Eu minim incididunt nulla elit. Irure id laborum exercitation dolor sunt sunt in eu cupidatat aliqua ex ipsum officia elit.",
      "Nostrud elit excepteur quis ipsum dolore ea in cupidatat. Eu elit dolore pariatur laboris sunt cupidatat ad. Sint non cillum sit ullamco culpa ad aute mollit ex officia laborum voluptate amet minim. Sunt mollit enim est dolor nisi irure officia dolore ut do. Veniam non culpa eu et occaecat laborum dolore amet adipisicing. Elit fugiat deserunt mollit aute velit id occaecat labore. Exercitation non qui occaecat ea nisi sunt dolore incididunt labore.",
      "Irure enim non sunt elit non excepteur exercitation et eiusmod ullamco excepteur labore est. Est in ipsum voluptate aliquip consectetur. Irure ullamco non elit exercitation consectetur pariatur id adipisicing duis ut aliquip ex nostrud. Veniam labore est elit amet ipsum anim non veniam. Culpa voluptate occaecat et cillum occaecat eiusmod nostrud sint aute mollit et ullamco. Mollit aute minim minim adipisicing Lorem mollit duis elit elit incididunt do. Deserunt dolore Lorem velit sunt adipisicing proident nulla ut."
  ]
};

function HistoryPop() {
  return (
    <div className="HistoryPop">
      <History imageUrl={historyData.imageUrl} content={historyData.content} />
      
      <MovieCom movies={movies} />

    </div>
  );
}

export default HistoryPop;
