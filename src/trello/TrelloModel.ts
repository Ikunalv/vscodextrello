type TrelloToDo = {
  title: string;
  description: string;
  boards: Array<PickerItem>;
  selectedBoard: PickerItem;
  lists: Array<PickerItem>;
  selectedList: PickerItem;
  labels: Array<PickerItem>;
  tasks:Array<Task>;
  selectedLabels: Array<PickerItem>;
  url: string;
};
