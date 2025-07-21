setcpm(120 /4)

// Riff guitar
$: note(`<
     [<d4*2 e4*2 g4*2 d4*2 d4*2 e4*2 g4*2 d4*2 d4*2 e4*2 g4*2>/2, [~ d5 a4 g4 g5 a4 gb5 a4]]*22@22
     [e5 a4 d5 a4 e5 a4 f#5 a4]
     [g5 a4 f#5 a4 e5 a4 d5@2]
  >`)
  .sound("gm_electric_guitar_clean")
  .dec(1)._punchcard()

// Base guitar
$: note(`<
     [~ ~ ~ ~ ~ ~ ~ ~]!7
     [d4, a4, c4]*8
     [[f#4, d4, a4]*2 [e4, g4, c4]*2 [g4, b4, d4]*2 [f#4, d4, a4]*2]*2@16
>`)
  .room(2)
  .sound("gm_overdriven_guitar")
  .lpf(900)
  .dec(1)._punchcard()

// Bass
$: note(`<
     [~ ~ ~ ~ ~ ~ ~ ~]!8
     [d3@3 gb3@3 ~ g3]
     [a3 [b3 a3] [g3 f#3] d3]
     [c3@3 g3@3 ~ c3]
     [f3 e3 c3 f3@2 e3 c3@2]
     [g2@7 d3]
     [g3@6 ~ d3]
     [g3 f#3 d3 g3@2 f#3 d3@2]
     [~ ~ ~ ~ ~ ~ ~ ~]!9
>`)
  .sound("gm_fretless_bass")
  .dec(1)._punchcard()

// Drum
$: sound(`<
     [~ ~ ~ ~ ~ ~ ~ ~]!8
     [[9000_cr@4 ~@3 hh*3] [oh@4 ~@4]]*3@6
     [<sd, 9000_mt, 9000_cr> <sd, 9000_mt>!7]
     [<sd, 9000_mt>!5 <9000_bd, 9000_mt> 9000_cr@2]
     [<<<9000_bd, 9000_cr> 9000_bd 9000_bd 9000_bd> 9000_bd oh 9000_lt>*4, hh*4]*14@7
     [~ <9000_cr, 9000_lt> <bd, 9000_lt> bd <9000_cr, 9000_lt> bd <9000_cr, 9000_lt>@2]
>`)
  .lpf(1600)
  .dec(1)._punchcard()
