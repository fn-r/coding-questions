function excludingVatPrice($price){
    return ($price != null) ? round($price / 1.15, 2) : -1;
  }