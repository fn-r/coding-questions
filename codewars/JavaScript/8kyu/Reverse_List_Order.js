function reverseList(list) {
  const reverse_list = []
  for (item of list.reverse()) {reverse_list.push(item)}
  return reverse_list
}