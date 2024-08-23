interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

// interface Email {
//   value: string;
//   selected: boolean;
// }


const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

const numberOfProducts : DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T>(item: DropdownItem<string>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  // const item = createDropdownItem<string>(email);
  // const selectTag = document.querySelector('#email-dropdown');
  // selectTag.appendChild(item);
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  
  if (selectTag) {  // selectTag가 null이 아닌 경우에만 appendChild 실행
    selectTag.appendChild(item);
  } else {
    console.error('The select tag with id "email-dropdown" was not found.');
  }
});

numberOfProducts.forEach(function(product) {
  const item = createDropdownItem(product);
})