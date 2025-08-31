setcpm(150/4);

$: note(`<
     [d5 ~ [d5 d#5] [d5 c5]]
     [d5 d5 ~]@0.75
     [[e#5 d#5] d5@1.5 ~@0.5]@0.75
     [d5@0.75 [d#5 d5 c5]@2.5]@0.5
     [d5!3 d4]
  >`)
  .sound("gm_pan_flute")
  .dec(1);

$: note(`<
     [d4 [d4*2]!3]
     [d4 d4 [d4*2]]@0.75
     [d4*2 d4!2]@0.75
     [d4*4]@0.5
     [d4*4]
  >`)
  .sound("gm_blown_bottle")
  .dec(0.5)
  .gain(0.3);
