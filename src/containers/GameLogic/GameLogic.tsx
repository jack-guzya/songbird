// type ElementsListProps = {
//   elementsList: ElementsListType,
//   categories: ICategoryList,
//   data: DataType
//   status: StatusType
//   showDescription: (current: CurrentElementType) => object,
//   setElementsList: (list: ElementsListType) => object,
//   updateScore: (score: ScoreType) => object
//   setStatus: (status: StatusType) => object
// }

// handleResult = (isSuccess: boolean): void => {
//   const {
//     updateScore, setStatus, status,
//   } = this.props;

//   if (status) { return; }

//   if (isSuccess) {
//     updateScore(this.score);
//     setStatus(true);
//     return;
//   }

//   setStatus(false);
//   this.score = this.score > 0 ? this.score - 1 : 0;
// }
