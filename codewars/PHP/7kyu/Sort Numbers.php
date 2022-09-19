function solution($nums) {
  if ($nums == null || count($nums) == 0) return [];
  sort($nums);
  return $nums;
}