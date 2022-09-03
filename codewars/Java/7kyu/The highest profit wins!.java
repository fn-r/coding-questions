class MinMax {
    public static int[] minMax(int[] arr) {
      int[] newArr = new int[2];
      newArr[0] = arr[0]; //min
      newArr[1] = arr[0]; //max
      
      for(int i = 0; i < arr.length; i++) {
        // current item is smaller then min
        // set min to current item
        if(arr[i] < newArr[0]) {
          newArr[0] = arr[i];
        }
        
        // current item is larger then max
        // set max to current item
        if(arr[i] > newArr[1]) {
          newArr[1] = arr[i];
        }
      }
      
      return newArr;
    }
}