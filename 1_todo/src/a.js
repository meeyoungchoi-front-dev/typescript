let arr = [
    {gender: 'male', name: 'John'},
    {gender: 'female', name: 'sarah'},
    {gender: 'male', name: 'bone'}
];

console.log(arr.filter(function (item) {
    if (item.gender === 'female') {
        return item;
    }
}));