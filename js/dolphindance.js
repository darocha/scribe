
var melody = [
	[0,   1, 'chord', 'C∆'],
	[4,   1, 'chord', 'G-'],
	[8,   1, 'chord', 'C∆'],
	[12,  1, 'chord', 'Bø'],
	[14,  1, 'chord', 'E7alt'],
	[16,  1, 'chord', 'A-'],
	[20,  1, 'chord', 'F∆(♯11)'],
	[22,  1, 'chord', 'E7alt'],
	[24,  1, 'chord', 'A-'],
	[28,  1, 'chord', 'F♯-7'],
	[30,  1, 'chord', 'B7'],
	[32,  1, 'chord', 'E∆'],
	[36,  1, 'chord', 'F-7'],
	[40,  1, 'chord', 'D-7'],
	[46,  1, 'chord', 'E7alt'],
	[48,  1, 'chord', 'A-7'],
	[56,  1, 'chord', 'F♯-7'],
	[60,  1, 'chord', 'B7'],
	[64,  1, 'chord', 'E∆'],
	[68,  1, 'chord', 'E7sus'],
	[72,  1, 'chord', 'E∆♯11'],
	[76,  1, 'chord', 'E7sus'],
	[80,  1, 'chord', 'D7sus'],
	[84,  1, 'chord', 'D∆♯11'],
	[88,  1, 'chord', 'D7sus'],
	[92,  1, 'chord', 'C♯-7'],
	[94,  1, 'chord', 'F♯7'],
	[96,  1, 'chord', 'C7♯11'],
	[100, 1, 'chord', 'F♯-7'],
	[102, 1, 'chord', 'B7'],
	[104, 1, 'chord', 'G♯-7'],
	[108, 1, 'chord', 'C♯7'],
	[110, 1, 'chord', 'B-7'],
	[112, 1, 'chord', 'B♭-7'],
	[116, 1, 'chord', 'E♭7'],
	[120, 1, 'chord', 'C♯-7'],
	[124, 1, 'chord', 'C♯-♭6'],
	[128, 1, 'chord', 'C♯-7'],
	[132, 1, 'chord', 'C♯-♭6'],
	[136, 1, 'chord', 'C7sus'],
	[140, 1, 'chord', 'C∆♭6'],
	[144, 1, 'chord', 'C7sus♭9'],
	//[148, 1, 'chord', 'E7alt'],

	[2,      0.5,  'note', 76],
	[2.5,    0.5,  'note', 77],
	[3,      0.5,  'note', 79],
	[3.5,    3.5,  'note', 74],
	[10,     0.5,  'note', 76],
	[10.5,   0.5,  'note', 77],
	[11,     0.5,  'note', 79],
	[11.5,   3.5,  'note', 74],
	[18,     0.5,  'note', 72],
	[18.5,   1,    'note', 74],
	[19.5,   0.5,  'note', 76],
	[20,     1,    'note', 71],
	[21,     2,    'note', 71],
	[26,     0.5,  'note', 72],
	[26.5,   0.5,  'note', 74],
	[27,     0.5,  'note', 76],
	[27.5,   3.5,  'note', 71],
	[31,     1,    'note', 69],
	[32,     1.5,  'note', 68],
	[33.5,   2.5,  'note', 75],
	[36,     1.5,  'note', 75],
	[37.5,   0.5,  'note', 75],
	[38,     0.5,  'note', 77],
	[38.5,   0.5,  'note', 75],
	[39,     0.5,  'note', 77],
	[39.5,   4.5,  'note', 79],
	[48,     1.5,  'note', 76],
	[49.5,   2.5,  'note', 79],
	[52,     1,    'note', 79],
	[53,     0.5,  'note', 79],
	[53.5,   0.5,  'note', 79],
	[54,     0.5,  'note', 81],
	[54.5,   0.5,  'note', 79],
	[55,     0.5,  'note', 81],
	[55.5,   4.5,  'note', 83],
	[66,     0.5,  'note', 80],
	[66.5,   0.5,  'note', 81],
	[67,     0.5,  'note', 83],
	[67.5,   3.5,  'note', 78],
	[74,     0.5,  'note', 76],
	[74.5,   0.5,  'note', 78],
	[75,     0.5,  'note', 80],
	[75.5,   3.5,  'note', 74],
	[82,     0.5,  'note', 72],
	[82.5,   1,    'note', 74],
	[83.5,   0.5,  'note', 76],
	[84,     1,    'note', 71],
	[85,     2,    'note', 71],
	[90,     0.5,  'note', 72],
	[90.5,   1,    'note', 74],
	[91,     0.5,  'note', 76],
	[91.5,   4.5,  'note', 78],
	[96,     0.5,  'note', 78],
	[96.5,   0.5,  'note', 79],
	[97.5,   0.25, 'note', 78],
	[97.75,  0.25, 'note', 77],
	[98,     1,    'note', 78],
	[99,     0.5,  'note', 78],
	[99.5,   0.5,  'note', 83],
	[100.5,  3.5,  'note', 80],
	[104,    0.5,  'note', 80],
	[104.5,  0.5,  'note', 82],
	[105.5,  0.25, 'note', 80],
	[105.75, 0.25, 'note', 78],
	[106,    1,    'note', 80],
	[107,    0.5,  'note', 80],
	[107.5,  2.5,  'note', 85],
	[110,    2,    'note', 86],
	[112,    1.5,  'note', 87],
	[113.5,  1,    'note', 85],
	[114.5,  1,    'note', 80],
	[115.5,  0.5,  'note', 77],
	[116,    3,    'note', 84],
	[119,    0.5,  'note', 75],
	[119.5,  8.5,  'note', 80],
	[138,    0.5,  'note', 81],
	[138.5,  0.5,  'note', 82],
	[139,    0.5,  'note', 84],
	[139.5,  3.5,  'note', 79],
	[146,    0.5,  'note', 76],
	[146.5,  0.5,  'note', 77],
	[147,    0.5,  'note', 79],
	[147.5,  3.5,  'note', 74]
];

var options = {
	key: 'C',
	
	clef: 'treble',
	staveSpacing: 22,
	chordsOffset: -9,
	paddingTop: 9,

	symbols: {
		16: 'repeat-start',
		152: 'repeat-end'
	},

	barsPerStave: {
		0: 4,
		112: 6
	},
	
	transpose: 0
}

var scribe = Scribe('sheet', melody, options);