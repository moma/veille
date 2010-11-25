var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"origine de la marée noire": {
men: [0.46766, 0.48443, 0.47592, 0.47355, 0.49445, 0.5045, 0.48033, 0.37085, 0.37056, 0.31648, 0.23938, 0.1276, 0.14405, 0.15793, 0.15605, 0.16678, 0.14332, 0.12416, 0.10618, 0.1078, 0.11402, 0.10075, 0.1071, 0.16914, 0.20323, 0.28902, 0.21656, 0.13803, 0.15185, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.32427, 0.45292, 0.45282, 0.45401, 0.39815, 0.30966, 0.28265, 0.28259, 0.28259, 0.28259, 0.28259, 0.28259, 0.4232, 0.4232, 0.16864, 0.22778, 0.21282, 0.199, 0.21212, 0.25069, 0.23772, 0.23775, 0.23775, 0.23775, 0.23775, 0.23775, 0.23775, 0.23775, 0.28728, 0, 0, 0, 0, 0.43503, 0.97881, 0.97881, 0.97881, 0.97881, 0.97881, 0.97881, 0.97881, 0.97881, 0.97881, 0.97881, 0.97881, 0.97758, 0.98215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières solides": {
men: [0.73011, 0.73035, 0.73338, 0.73266, 0.73321, 0.66748, 0.67381, 0.64586, 0.62688, 0.61789, 0.5856, 0.47977, 0.46544, 0.45131, 0.45155, 0.45152, 0.44279, 0.43525, 0.42557, 0.46113, 0.27429, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.30374, 0.30204, 0.30204, 0.96653, 0.96653, 0.96653, 0.96667, 0.96667, 0.96667, 0.96667, 0.96667, 0.96667, 0.37593, 0.37593, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités fédérales": {
men: [0.26502, 0.25631, 0.23779, 0.23791, 0.23805, 0.1893, 0.43498, 0.50242, 0.42599, 0.42635, 0.39924, 0.38595, 0.40118, 0.39172, 0.40237, 0.39202, 0.42364, 0.42371, 0.42375, 0.41159, 0.26537, 0.23264, 0.27404, 0.2747, 0.2747, 0.30608, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31722, 0.31722, 0.33389, 0.40483, 0.36279, 0.36284, 0.36284, 0.36284, 0.36284, 0.24905, 0.23488, 0.18016, 0.18016, 0.18154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.02821, 0.02821, 0.02821], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"puits macondo": {
men: [0.30272, 0.29004, 0.26593, 0.26606, 0.25081, 0.23764, 0.26281, 0.26246, 0.26655, 0.27455, 0.28223, 0.28389, 0.22327, 0.20183, 0.19129, 0.19586, 0.1946, 0.16376, 0.1592, 0.16328, 0.13172, 0.10988, 0.095599, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.20562, 0.2825, 0.2825, 0.43942, 0.45276, 0.45276, 0.45282, 0.45282, 0.45282, 0.45282, 0.41222, 0.41222, 0.47864, 0.47864, 0.34602, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"écoulement de pétrole": {
men: [0.029401, 0, 0, 0, 0, 0, 0, 0, 0.042182, 0.0345, 0.03455, 0.034576, 0.095857, 0.15206, 0.15214, 0.2033, 0.20333, 0.20336, 0.20338, 0.20357, 0.22305, 0.44397, 0.53024, 0.97411, 0.97411, 0.97536, 0.97505, 0.9675, 0.96773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.62347, 0.54756, 0.549, 0.549, 0.54956, 0.55199, 0.55187, 0.55187, 0.55187, 0.55187, 0.55187, 0.55231, 0.72468, 0.66141, 0.25772, 0.34113, 0.34113, 0.34113, 0.34113, 0.34113, 0.34118, 0.34118, 0.34118, 0.34118, 0.34118, 0.34118, 0.34118, 0.96667, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"puits de pétrole": {
men: [0.2705, 0.29428, 0.31681, 0.34107, 0.38073, 0.40901, 0.36293, 0.27056, 0.26648, 0.26917, 0.25444, 0.2268, 0.22923, 0.22902, 0.22171, 0.22518, 0.22164, 0.21221, 0.20792, 0.1894, 0.18016, 0.22693, 0.26631, 0.2482, 0.29421, 0.31424, 0.2896, 0.28165, 0.28171, 0.24512, 0.25719, 0.3749, 0.44467, 0.44467, 0.44631, 0.48335, 0.12999, 0.069171, 0.094264, 0.20769, 0.20765, 0.20052, 0.19606, 0.18958, 0.18681, 0.18677, 0.18304, 0.18304, 0.18304, 0.17946, 0.15359, 0.12731, 0.13011, 0.14925, 0.13749, 0.1375, 0.13802, 0.13918, 0.14037, 0.14039, 0.14253, 0.14159, 0.14159, 0.14207, 0.16661, 0.2066, 0.22844, 0.062153, 0, 0, 0, 0.12717, 0.13405, 0.13405, 0.13405, 0.14324, 0.13124, 0.13826, 0.13396, 0.42431, 0.42431, 0.42431, 0.42431, 0.37897, 0.38075, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nettoyage des plages": {
men: [0.58084, 0.58104, 0.58097, 0.58125, 0.58158, 0.94599, 0.94591, 0.17093, 0.21384, 0.21402, 0.21434, 0.2145, 0.3282, 0.41606, 0.35567, 0.43881, 0.43887, 0.43894, 0.43898, 0.4394, 0.43958, 0.76661, 0.97176, 0.97411, 0.97411, 0.97536, 0.97505, 0.9675, 0.50055, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"injecter du ciment": {
men: [0.15444, 0.15449, 0.41687, 0.41708, 0.94844, 0.38043, 0.3804, 0.36268, 0.48835, 0.48876, 0.48948, 0.48985, 0.50553, 0.51753, 0.51781, 0.51777, 0.51173, 0.51181, 0.51185, 0.53919, 0.53941, 0.63091, 0.97049, 0.97284, 0.97284, 0.97409, 0.96719, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"dôme de confinement": {
men: [0.16211, 0.13908, 0.13835, 0.12137, 0.081673, 0.028914, 0.10059, 0.14736, 0.20274, 0.2923, 0.31058, 0.31082, 0.34433, 0.37371, 0.37391, 0.40094, 0.401, 0.40106, 0.43467, 0.45694, 0.46264, 0.84321, 0.97751, 0.97411, 0.97411, 0.97536, 0.97505, 0.9675, 0.96773, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorités américaines": {
men: [0.25274, 0.25079, 0.24137, 0.24141, 0.23994, 0.23223, 0.23486, 0.21814, 0.20917, 0.21499, 0.18963, 0.19306, 0.20055, 0.21821, 0.21381, 0.22898, 0.24429, 0.23884, 0.23516, 0.26685, 0.28105, 0.27633, 0.31958, 0.27826, 0.27826, 0.25293, 0.24716, 0.24104, 0.23765, 0.16099, 0.15123, 0.16131, 0.16606, 0.16464, 0.086999, 0.10397, 0.011418, 0.01035, 0.033914, 0.035928, 0.050192, 0.037709, 0.035187, 0.065557, 0.068474, 0.06263, 0.06263, 0.063992, 0.058562, 0.052994, 0.052362, 0.053278, 0.017918, 0.10602, 0.10318, 0.087483, 0.090378, 0.091634, 0.089005, 0.092558, 0.092558, 0.084187, 0.086033, 0.089335, 0.088736, 0.090882, 0.091671, 0.033531, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fond de la mer": {
men: [0.30446, 0, 0, 0, 0, 0, 0.44041, 0.39183, 0.34849, 0.35301, 0.35352, 0.35379, 0.36555, 0.32474, 0.23016, 0.23014, 0.21208, 0.19665, 0.19667, 0.19686, 0.14561, 0, 0.31341, 0.31417, 0.31417, 0.31457, 0.3157, 0.33443, 0.38801, 0.38786, 0.39414, 0.42632, 0.42632, 0.42632, 0.42789, 0.46162, 0, 0, 0, 0.46291, 0.44873, 0.43711, 0.47274, 0.47322, 0.49397, 0.49387, 0.49387, 0.49387, 0.4631, 0.4631, 0.46347, 0.37735, 0.34748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nhc": {
men: [0.63566, 0.63587, 0.65924, 0.65956, 0.65994, 0.66058, 0.66053, 0.66077, 0.60952, 0.71315, 0.96169, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96032, 0.96192, 0.96379, 0.96612, 0.96612, 0.96737, 0.97082, 0.25862, 0.25868, 0.25859, 0.18903, 0.16035, 0.16035, 0.13923, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"boues de forage": {
men: [0, 0, 0, 0, 0, 0.051745, 0.094479, 0.20177, 0.25608, 0.22332, 0.22365, 0.22382, 0.22406, 0.2246, 0.22472, 0.2247, 0.22473, 0.22477, 0.22479, 0.22902, 0.31706, 0.40273, 0.37676, 0.98207, 0.98207, 0.98333, 0.98684, 0.98584, 0.98607, 0.98571, 0.98476, 0.98476, 0.98476, 0.98476, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"responsables de bp": {
men: [0.047256, 0.048981, 0.052806, 0.057085, 0.04414, 0.053002, 0.14064, 0.14542, 0.14804, 0.19857, 0.20699, 0.22641, 0.38349, 0.61475, 0.64889, 0.63469, 0.66693, 0.70138, 0.70143, 0.66039, 0.70931, 0.71049, 0.78163, 0.78352, 0.78352, 0.78453, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17943, 0.15061, 0.15061, 0.15076, 0.15143, 0.1514, 0.1514, 0.1514, 0.1514, 0.1514, 0.47506, 0.47506, 0.47621, 0.47523, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"garde-côtes américains": {
men: [0.37856, 0.27709, 0.25809, 0, 0, 0, 0, 0, 0, 0.20215, 0.20245, 0.2026, 0.26275, 0.26338, 0.26352, 0.41794, 0.54985, 0.54994, 0.60237, 0.60295, 0.96942, 0.97103, 0.97292, 0.96313, 0.96313, 0.96437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"barrages flottants": {
men: [0, 0, 0, 0, 0, 0, 0, 0.14294, 0.2088, 0.20898, 0.20928, 0.20944, 0.22711, 0.17082, 0.12134, 0.12133, 0.10218, 0.10219, 0.1022, 0.1023, 0.15532, 0, 0, 0, 0, 0, 0, 0.69526, 0.84587, 0.77707, 0.89094, 0.89094, 0.89094, 0.89094, 0.89422, 0.89422, 0.89582, 0.89582, 0.89466, 0.89222, 0.89202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"naufrage de la plateforme": {
men: [0.1911, 0.1905, 0.17653, 0.14309, 0.14317, 0.26621, 0.35412, 0.38364, 0.40467, 0.43653, 0.43329, 0.43545, 0.46288, 0.52119, 0.46979, 0.48248, 0.48715, 0.48723, 0.47433, 0.43855, 0.38624, 0.34241, 0.2784, 0.12153, 0.12512, 0.20648, 0.17255, 0.15073, 0.18818, 0.12813, 0.12801, 0.12801, 0.1507, 0.25353, 0.27986, 0.27986, 0.061831, 0.042964, 0.067729, 0.17678, 0.17674, 0.17721, 0.17655, 0.17673, 0.17752, 0.17748, 0.17748, 0.17748, 0.17386, 0.17386, 0.29406, 0.54856, 0.56131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"injection de boue": {
men: [0.16219, 0.24764, 0.94744, 0.94791, 0.94844, 0.95423, 0.95415, 0.48821, 0.47672, 0.56469, 0.56551, 0.56595, 0.55965, 0.561, 0.5613, 0.56125, 0.55417, 0.55426, 0.55431, 0.54492, 0.54514, 0.62099, 0.7029, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"surface de l' eau": {
men: [0.68424, 0.70935, 0.6344, 0.62341, 0.54874, 0.54928, 0.51486, 0.37529, 0.37074, 0.37105, 0.3716, 0.37188, 0.34795, 0.13779, 0.030539, 0.030536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.35592, 0.30223, 0.30212, 0.30183, 0.30183, 0.38331, 0.38331, 0.44943, 0.49772, 0.42752, 0.451, 0.45042, 0.44919, 0.51404, 0, 0, 0, 0, 0.094313, 0.094313, 0.094313, 0.11406, 0.080393, 0.17013, 0.17013, 0.17054, 0.17019, 0.072403, 0.079148, 0.079148, 0.079148, 0.079148, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mississippi": {
men: [0.40414, 0.40034, 0.38854, 0.35103, 0.33375, 0.27712, 0.25344, 0.25735, 0.24628, 0.23524, 0.16166, 0.14628, 0.13949, 0.02403, 0.022421, 0.024578, 0.025553, 0.024349, 0.022463, 0, 0, 0, 0, 0, 0, 0, 0, 0.17459, 0.21248, 0.20107, 0.20792, 0.22259, 0.24449, 0.24449, 0.24124, 0.24084, 0.21149, 0.21149, 0.2261, 0.21634, 0.24272, 0.038082, 0.038571, 0.04245, 0.046, 0.06795, 0.06795, 0.06795, 0.079391, 0.074724, 0.12952, 0.12952, 0.12983, 0.19004, 0.099019, 0.10436, 0.11295, 0.11295, 0.11295, 0.082369, 0.082369, 0.064469, 0.060438, 0.071022, 0.071022, 0.071022, 0.071022, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.090821, 0.082042, 0.07545, 0.097866, 0.097866, 0.080797, 0.080797, 0.073578, 0.075731, 0.078539, 0.088066, 0.088066, 0.096055, 0.088066, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"animaux morts": {
men: [0, 0, 0, 0, 0, 0, 0, 0.01618, 0.01618, 0.016254, 0.016278, 0.01629, 0.12658, 0.12688, 0.94642, 0.94634, 0.94647, 0.94662, 0.9467, 0.94761, 0.948, 0, 0, 0, 0, 0, 0, 0.98331, 0.98354, 0.67288, 0.44098, 0.3402, 0.3402, 0.3402, 0.34146, 0.34146, 0.34207, 0.33241, 0.33198, 0.30223, 0.30216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"alabama": {
men: [0.38029, 0.37905, 0.36449, 0.32213, 0.27949, 0.1381, 0.096659, 0.13457, 0.17829, 0.20005, 0.23884, 0.18851, 0.18872, 0.12235, 0.13103, 0.144, 0.10831, 0.092796, 0.085826, 0.067919, 0.064331, 0.020051, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.049551, 0.049682, 0.044218, 0.046982, 0.051344, 0.073105, 0.073105, 0.073105, 0.19247, 0.36714, 0.36743, 0.36743, 0.36832, 0.50437, 0.37966, 0.21563, 0.32952, 0.20765, 0.17189, 0.12771, 0.12771, 0.12771, 0.12771, 0.12771, 0.11863, 0.050213, 0.031156, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.31979, 0.32128, 0.36571, 0.36571, 0.36571, 0.36571, 0.21106, 0.18171, 0.18369, 0.17365, 0.17365, 0.17365, 0.17365, 0.19879, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"régions côtières": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.98315, 0.98775, 1, 1, 1, 1, 1, 0.62222, 0.62222, 0.62222, 0.62222, 0.62222, 0.62222, 0.62222, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"bloc obturateur": {
men: [0.28956, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.97316, 0.97316, 0.97316, 0.97316, 0.52093, 0.35145, 0.17948, 0.093605, 0.15881, 0.32164, 0.33173, 0.32751, 0.31037, 0.31069, 0.27707, 0.27701, 0.27701, 0.27701, 0.28972, 0.30414, 0.35689, 0.52701, 0.60043, 0.16741, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"soupe toxique": {
men: [0, 0, 0, 0, 0, 0.18367, 0.5874, 0.63069, 0.63068, 0.63122, 0.63214, 0.63263, 0.63332, 0.63484, 0.63518, 0.63513, 0.63521, 0.63532, 0.63537, 0.83527, 0.9591, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"difficultés respiratoires": {
men: [0, 0, 0, 0, 0, 0, 0.72846, 0.70672, 0.70671, 0.70731, 0.70835, 0.70889, 0.63103, 0.63254, 0.67295, 0.6729, 0.67299, 0.65302, 0.65308, 0.65371, 0.57107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"nouvelle-orléans": {
men: [0.18709, 0.17717, 0.20534, 0.1899, 0.16716, 0.14062, 0.14317, 0.14017, 0.13569, 0.12755, 0.16521, 0.20833, 0.27843, 0.33553, 0.26848, 0.35288, 0.31469, 0.31474, 0.31477, 0.31507, 0.32918, 0.30686, 0.32338, 0.42237, 0.37522, 0.3757, 0.1726, 0.22028, 0.21458, 0.18234, 0.16166, 0.13488, 0.090014, 0.084285, 0.084161, 0.083674, 0.082243, 0.075518, 0.077236, 0.077025, 0.085499, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074417, 0.074, 0.074, 0.07079, 0.063923, 0.066401, 0.076988, 0.093343, 0.093343, 0.11158, 0.16869, 0.23243, 0.23243, 0.23243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"gouvernement américain": {
men: [0.33874, 0.33672, 0.33478, 0.34664, 0.31615, 0.24654, 0.23234, 0.26369, 0.2605, 0.21442, 0.21725, 0.23642, 0.24463, 0.21641, 0.19877, 0.19514, 0.19396, 0.19018, 0.19003, 0.17825, 0.18348, 0.16155, 0.17225, 0.21218, 0.21773, 0.20345, 0.15784, 0.16881, 0.17808, 0.17999, 0.163, 0.16392, 0.1721, 0.17627, 0.075887, 0.077277, 0.032079, 0.032482, 0.033249, 0, 0, 0, 0, 0, 0, 0.0069403, 0.0069403, 0.0071452, 0.0091603, 0.011399, 0.009395, 0.01171, 0.0106, 0.18547, 0.22263, 0.21377, 0.15701, 0.15588, 0.15896, 0.15899, 0.15899, 0.13918, 0.13804, 0.13974, 0.14381, 0.13426, 0.12265, 0.030261, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.011796, 0.01037, 0.010239], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mesures acoustiques": {
men: [0.9673, 0.96762, 0.9675, 0.96798, 0.96853, 0.96947, 0.96939, 0.96976, 0.96974, 0.96982, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 