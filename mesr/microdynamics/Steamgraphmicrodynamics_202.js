var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"fonds structurels européens": {
men: [0.97291, 0.97106, 0.97239, 0.97293, 0.97337, 0.97548, 0.97603, 0.97725, 0.97862, 0.97926, 0.97937, 0.97951, 0.97922, 0.97889, 0.97803, 0.98036, 0.97977, 0.98022, 0.98008, 0.97758, 0.97497, 0.97269, 0.96602, 0, 0, 0, 0, 0, 0.8856, 0.92087, 0.92018, 0.92006, 0.92006, 0.94418, 0.94934, 0.95576, 0.95919, 0.98126, 0.98015, 0.98003, 0.98013, 0.98152, 0.98148, 0.981, 0.98248, 0.98251, 0.98263, 0.98106, 0.98106, 0.98068, 0.98026, 0.97994, 0.98104, 0.98111, 0.98071, 0.9805, 0.97934, 0.98083, 0.98023, 0.98029, 0.98012, 0.98039, 0.98067, 0.97994, 0.98012, 0.9792, 0.97925, 0.97915, 0.98043, 0.98057, 0.98107, 0.98001, 0.97973, 0.97953, 0.97953, 0.97962, 0.97962, 0.97987, 0.98012, 0.98047, 0.98058, 0.98017, 0.97905, 0.979, 0.97869, 0.97846, 0.97775, 0.97777, 0.97783, 0.97782, 0.97737, 0.97592, 0.95852, 0.95511, 0.95492, 0.95525, 0.95591, 0.95173, 0.94628, 0.94986, 0.95291, 0.95291, 0.95274, 0.95203, 0.95252, 0.95494, 0.96966, 0.96994, 0.97, 0.96948], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"jean-noël escudié": {
men: [0.95935, 0.95751, 0.95823, 0.95877, 0.9592, 0.96155, 0.9625, 0.96385, 0.96556, 0.96613, 0.96624, 0.96637, 0.96611, 0.96572, 0.96579, 0.96809, 0.96806, 0.96851, 0.96837, 0.96598, 0.96317, 0.95978, 0.95147, 0, 0, 0, 0, 0, 0.95485, 0.95684, 0.95613, 0.956, 0.956, 0.96237, 0.96364, 0.96513, 0.96645, 0.96728, 0.96618, 0.96606, 0.96626, 0.96679, 0.96679, 0.96686, 0.96835, 0.96837, 0.96849, 0.9666, 0.96549, 0.96601, 0.96428, 0.96445, 0.96554, 0.9656, 0.96493, 0.9655, 0.96457, 0.96564, 0.96414, 0.9642, 0.96404, 0.9653, 0.96529, 0.96368, 0.96424, 0.9623, 0.96234, 0.96224, 0.96313, 0.96258, 0.96357, 0.96216, 0.96207, 0.96186, 0.96187, 0.96063, 0.96302, 0.96326, 0.96301, 0.96416, 0.96427, 0.96388, 0.96363, 0.96403, 0.96419, 0.9644, 0.96423, 0.96424, 0.96431, 0.96387, 0.96323, 0.96159, 0.96163, 0.95949, 0.95929, 0.95963, 0.9601, 0.95652, 0.95348, 0.95375, 0.95484, 0.95484, 0.95467, 0.95567, 0.95547, 0.95602, 0.95517, 0.95545, 0.9555, 0.95499], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"engagement national pour l' environnement": {
men: [0.89345, 0.8688, 0.86873, 0.86922, 0.86961, 0.76459, 0.74167, 0.76661, 0.73469, 0.62396, 0.62403, 0.72769, 0.72821, 0.95189, 0.94873, 0.95099, 0.95401, 0.95445, 0.95432, 0.95432, 0.95416, 0.94943, 0, 0, 0, 0, 0, 0, 0.95595, 0.95707, 0.95636, 0.95623, 0.95623, 0.95587, 0.95521, 0.95484, 0.95431, 0.95365, 0.95256, 0.95245, 0.95187, 0.95239, 0.94023, 0, 0.94299, 0.94302, 0.94314, 0.94277, 0.94279, 0.94275, 0.94481, 0.94484, 0.95744, 0.9575, 0.9579, 0.95679, 0.95654, 0.95612, 0.95423, 0.95429, 0.95413, 0.95437, 0.95436, 0.95441, 0.95379, 0.95397, 0.93114, 0.93104, 0.94618, 0.9472, 0.95051, 0.95058, 0.95032, 0.95012, 0.95013, 0.95437, 0.95845, 0.85749, 0.85764, 0.87384, 0.87394, 0.87358, 0.86066, 0.86043, 0.85508, 0.85469, 0.89457, 0.89458, 0.89464, 0.88532, 0.87898, 0.95812, 0.95811, 0.95602, 0.95582, 0.95616, 0.95572, 0.95253, 0.95103, 0.95079, 0.94583, 0.76177, 0.76163, 0.78922, 0.72275, 0.72274, 0.69626, 0.69646, 0.6965, 0.73807], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"projet de loi de réforme": {
men: [0.90018, 0.88933, 0.91834, 0.94059, 0.95254, 0.97063, 0.97603, 0.97725, 0.97862, 0.97926, 0.97937, 0.97951, 0.97922, 0.97889, 0.97803, 0.98036, 0.97977, 0.98022, 0.98008, 0.97758, 0.97497, 0.97269, 0.96602, 0, 0, 0, 0, 0, 0.97071, 0.974, 0.97328, 0.97315, 0.97315, 0.92833, 0.93549, 0.92579, 0.93246, 0.93945, 0.93409, 0.92384, 0.92759, 0.93305, 0.92796, 0.85331, 0.87176, 0.87178, 0.86338, 0.86975, 0.86961, 0.84172, 0.84118, 0.83688, 0.84129, 0.84978, 0.81056, 0.82237, 0.80957, 0.88211, 0.87448, 0.87453, 0.88569, 0.88607, 0.88879, 0.93176, 0.91883, 0.91117, 0.89828, 0.81255, 0.84245, 0.81165, 0.82349, 0.80783, 0.78737, 0.7814, 0.77568, 0.77116, 0.76202, 0.74827, 0.75131, 0.75728, 0.74104, 0.79073, 0.77144, 0.78054, 0.73525, 0.68959, 0.64873, 0.63478, 0.63537, 0.64081, 0.60745, 0.59774, 0.5876, 0.56832, 0.58886, 0.59726, 0.61818, 0.61886, 0.62867, 0.73064, 0.78231, 0.81445, 0.82129, 0.82536, 0.88536, 0.87401, 0.88005, 0.88031, 0.88035, 0.87989], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"emballages ménagers": {
men: [0.94155, 0.94097, 0.94089, 0.94142, 0.94184, 0.94285, 0.94425, 0.91969, 0.92069, 0.92145, 0.92155, 0.92168, 0.92234, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.93644, 0.93592, 0.93527, 0.93421, 0.93409, 0.95526, 0.95684, 0.9578, 0.95862, 0.95804, 0.95807, 0.95819, 0.95781, 0.97191, 0.94611, 0.94651, 0.94745, 0.94852, 0.94859, 0.94228, 0.90898, 0.90874, 0.90834, 0.90891, 0.90897, 0.90881, 0.90905, 0.6751, 0.66457, 0.58503, 0.68648, 0.68652, 0.68644, 0.73117, 0.94838, 0.94807, 0.94814, 0.94789, 0.94768, 0.94769, 0.94772, 0.94791, 0.94828, 0.94845, 0.93603, 0.93613, 0.93575, 0.9474, 0.95896, 0.9631, 0.96266, 0.96298, 0.963, 0.96306, 0.96283, 0.96247, 0.9636, 0.96311, 0.96251, 0.96231, 0.96265, 0.9615, 0.95313, 0.94321, 0.94297, 0.94249, 0.94249, 0.94232, 0.94221, 0.81305, 0, 0, 0, 0.69476, 0.69439], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pacte écologique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94381, 0.94394, 0.947, 0.94765, 0.94797, 0.95023, 0.95324, 0.95368, 0.95355, 0.95354, 0.95339, 0.95486, 0.95526, 0.95567, 0.94153, 0.94139, 0, 0, 0, 0, 0.44759, 0.73005, 0.73005, 0.76835, 0.79383, 0.79352, 0.81971, 0.81914, 0.8182, 0.8284, 0.8279, 0.85023, 0.85109, 0.85181, 0.96136, 0.95735, 0.95747, 0.95515, 0.95295, 0.95291, 0.94829, 0.80254, 0.80345, 0.75735, 0.60806, 0.21225, 0.21219, 0.33069, 0.3309, 0.33092, 0.33086, 0.50573, 0.50573, 0.50533, 0.50543, 0.61099, 0.61102, 0.61096, 0.93943, 0.94044, 0.94013, 0.93696, 0.94309, 0.94288, 0.94289, 0.93626, 0.93646, 0.93682, 0.43921, 0.43901, 0.43906, 0.69497, 0.87849, 0.87825, 0.8778, 0.88153, 0.87509, 0.87511, 0.88685, 0.88664, 0.88631, 0.88552, 0.95852, 0.95931, 0.93047, 0.92515, 0.8573, 0.85444, 0.85387, 0.87233, 0.87189, 0.87188, 0.8377, 0.60391, 0.60385, 0.40062, 0.40068, 0.153, 0.13573, 0.32173], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"trame verte": {
men: [0.38995, 0.40635, 0.48526, 0.48553, 0.48575, 0.48627, 0.48699, 0.51899, 0.52362, 0.45593, 0.45598, 0.38744, 0.38772, 0.26735, 0.94025, 0.94249, 0.94228, 0.94272, 0.94259, 0.24645, 0.24641, 0.10056, 0.1006, 0, 0, 0.47727, 0.47755, 0.47634, 0.47531, 0.4745, 0.47415, 0.47408, 0.47408, 0.8124, 0.60672, 0.62242, 0.62208, 0.68686, 0.68608, 0.49781, 0.49751, 0.49778, 0.49829, 0.49871, 0.52085, 0.52086, 0.52093, 0.81156, 0.94724, 0.94692, 0.94652, 0.96704, 0.96813, 0.96819, 0.96925, 0.96813, 0.96788, 0.96745, 0.96799, 0.88644, 0.88629, 0.86743, 0.69433, 0.70568, 0.70582, 0.3309, 0.39095, 0.39091, 0.23111, 0.3022, 0.41467, 0.50267, 0.50253, 0.67, 0.67001, 0.67002, 0.95575, 0.95516, 0.95533, 0.95667, 0.95589, 0.91891, 0.8863, 0.87928, 0.86009, 0.85612, 0.8564, 0.85641, 0.73363, 0.75371, 0.71938, 0.71874, 0.59023, 0.68386, 0.68372, 0.70124, 0.71905, 0.7535, 0.77492, 0.77448, 0.77797, 0.7452, 0.78188, 0.78178, 0.76661, 0.76659, 0.83118, 0.81202, 0.81207, 0.82636], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"sig": {
men: [0.76564, 0.66383, 0.69766, 0.70678, 0.72258, 0.76786, 0.75286, 0.7553, 0.76175, 0.78492, 0.77486, 0.77497, 0.76292, 0.76501, 0.74419, 0.92588, 0.92846, 0.9513, 0.95117, 0.46975, 0.4063, 0.18506, 0.10605, 0.021369, 0.020934, 0.020931, 0, 0, 0.10973, 0.10954, 0.10946, 0.10944, 0.10944, 0.16081, 0.16343, 0.47446, 0.61616, 0.61573, 0.74969, 0.70876, 0.70833, 0.72458, 0.18594, 0.1861, 0.14709, 0.14709, 0.14711, 0.29525, 0.29525, 0.29524, 0.29512, 0.29513, 0.29546, 0.40212, 0.24781, 0.82716, 0.82694, 0.8975, 0.94153, 0.94159, 0.94143, 0.94786, 0.95418, 0.95784, 0.85125, 0.8071, 0.80714, 0.7453, 0.77958, 0.76432, 0.77854, 0.75854, 0.75806, 0.7579, 0.7579, 0.6331, 0.56564, 0.54268, 0.5852, 0.6253, 0.62537, 0.66186, 0.64134, 0.64608, 0.65018, 0.65487, 0.63123, 0.63124, 0.63128, 0.77973, 0.91488, 0.97592, 0.97508, 0.92646, 0.92627, 0.92659, 0.92752, 0.9225, 0.91232, 0.91967, 0.92614, 0.92614, 0.91245, 0.9109, 0.9122, 0.9016, 0.89403, 0.93539, 0.93544, 0.93494], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fret ferroviaire": {
men: [0.55182, 0.56589, 0.56584, 0.56616, 0.56641, 0.54586, 0.19834, 0.70353, 0.37116, 0.52072, 0.52078, 0.52085, 0.78303, 0.76735, 0.825, 0.82291, 0.74648, 0.74682, 0.74672, 0.76807, 0.71512, 0.71622, 0.79359, 0.77831, 0.77841, 0.7783, 0.58929, 0.5878, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.77623, 0.77534, 0.77525, 0.77478, 0.7752, 0.94653, 0.94734, 0.94677, 0.94679, 0.94691, 0.94654, 0.94851, 0.94847, 0.94808, 0.62056, 0.62126, 0.6213, 0.62156, 0.62084, 0.62068, 0.70177, 0.70221, 0.70226, 0.70214, 0.70232, 0.65951, 0.69066, 0.6908, 0.94057, 0.94061, 0.94052, 0.93977, 0.5374, 0.53723, 0.26297, 0.49355, 0.49344, 0.49345, 0.49346, 0.49356, 0.38952, 0.70227, 0.70195, 0.70203, 0.70174, 0.70186, 0.67476, 0.30019, 0.4941, 0.46643, 0.46644, 0.43464, 0.47031, 0.47013, 0.46971, 0.37964, 0.46918, 0.46908, 0.46925, 0.50069, 0.61008, 0.90023, 0.82021, 0.81979, 0.81979, 0.87517, 0.83954, 0.84925, 0.82019, 0.82032, 0.797, 0.79704, 0.79661], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"infrastructures de transport": {
men: [0.62326, 0.60392, 0.54262, 0.50595, 0.51944, 0.49617, 0.4839, 0.49741, 0.45897, 0.49498, 0.52951, 0.60835, 0.5018, 0.51787, 0.51495, 0.60732, 0.55417, 0.63476, 0.54938, 0.44478, 0.27115, 0.27157, 0.27168, 0.25815, 0.25818, 0.25814, 0.051253, 0.041609, 0.19369, 0.16394, 0.17231, 0.17229, 0.18681, 0.14755, 0.21807, 0.20247, 0.18958, 0.17078, 0.17058, 0.17056, 0.14497, 0.16819, 0, 0.10682, 0.10203, 0.10203, 0.097068, 0.15709, 0.27135, 0.28625, 0.37351, 0.30143, 0.29262, 0.29264, 0.35644, 0.33858, 0.36041, 0.60079, 0.59509, 0.58376, 0.59564, 0.62089, 0.60125, 0.60792, 0.62457, 0.76153, 0.78538, 0.7853, 0.7783, 0.73303, 0.72571, 0.24437, 0.53741, 0.50958, 0.62814, 0.60511, 0.5701, 0.58452, 0.56412, 0.57708, 0.57714, 0.57691, 0.57878, 0.64401, 0.65369, 0.7561, 0.64922, 0.63274, 0.4918, 0.41393, 0.45011, 0.40561, 0.35862, 0.34277, 0.3427, 0.34282, 0.31856, 0.3213, 0.38234, 0.4572, 0.5683, 0.59694, 0.59436, 0.67642, 0.64133, 0.62803, 0.59651, 0.59668, 0.59671, 0.59639], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"précarité énergétique": {
men: [0.76704, 0.76656, 0.7665, 0.76693, 0.76728, 0.76809, 0.71911, 0.21615, 0.21638, 0.29137, 0.2914, 0.29144, 0.29165, 0.093902, 0.093934, 0.094157, 0.079598, 0.065261, 0.055276, 0.05183, 0.18954, 0.22301, 0.22311, 0.16429, 0.16431, 0.16429, 0.23315, 0.22543, 0.22494, 0.22456, 0.25833, 0.32768, 0.44804, 0.85004, 0.56791, 0.38621, 0.34699, 0.34675, 0.34636, 0.34631, 0.31883, 0.33568, 0.4329, 0.43327, 0.43301, 0.43302, 0.43307, 0.24216, 0.29265, 0.44028, 0.53502, 0.53504, 0.53564, 0.53567, 0.58431, 0.59858, 0.36653, 0.44866, 0.44895, 0.47342, 0.47334, 0.70563, 0.68229, 0.38211, 0.40559, 0.37139, 0.3714, 0.37136, 0.35035, 0.32623, 0.28441, 0.28094, 0.28087, 0.29986, 0.29986, 0.25491, 0.25496, 0.43128, 0.39402, 0.47002, 0.47007, 0.46988, 0.54354, 0.5434, 0.54312, 0.55969, 0.55987, 0.35641, 0.35643, 0.35635, 0.063297, 0.40805, 0.40243, 0.46104, 0.46095, 0.5027, 0.50289, 0.50121, 0.51467, 0.51454, 0.51428, 0.51428, 0.51419, 0.51412, 0.6988, 0.57706, 0.76728, 0.65835, 0.65839, 0.36107], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"handicap": {
men: [0.31632, 0.29467, 0.32411, 0.31215, 0.29412, 0.35042, 0.3818, 0.41405, 0.43789, 0.41805, 0.42801, 0.45108, 0.44025, 0.41464, 0.38699, 0.31024, 0.22368, 0.2334, 0.24441, 0.2001, 0.17264, 0.12859, 0.067649, 0.0038804, 0.0036303, 0.003714, 0.0035551, 0.0034979, 0.11239, 0.22579, 0.23233, 0.23112, 0.2354, 0.31387, 0.31635, 0.35671, 0.40008, 0.45695, 0.46995, 0.4687, 0.49931, 0.50374, 0.45388, 0.4109, 0.46786, 0.4605, 0.40847, 0.38859, 0.35106, 0.32505, 0.30446, 0.28022, 0.27655, 0.26254, 0.22913, 0.24736, 0.24461, 0.28212, 0.2632, 0.26707, 0.29453, 0.29936, 0.32915, 0.33783, 0.34611, 0.34992, 0.36348, 0.39211, 0.43343, 0.40596, 0.3838, 0.33451, 0.33608, 0.32705, 0.32412, 0.32221, 0.33186, 0.33237, 0.33508, 0.35666, 0.34985, 0.34709, 0.32994, 0.34001, 0.3808, 0.35618, 0.31171, 0.31587, 0.30684, 0.31078, 0.30261, 0.29906, 0.28997, 0.27219, 0.27665, 0.28005, 0.30819, 0.30639, 0.27787, 0.34504, 0.39509, 0.40927, 0.41865, 0.43237, 0.44004, 0.45615, 0.4574, 0.45894, 0.45255, 0.45679], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"----": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"air intérieur": {
men: [0.93277, 0.93219, 0.94342, 0.94395, 0.94438, 0.94538, 0.94679, 0.94788, 0.94891, 0.9497, 0.9498, 0.94994, 0.95062, 0.55705, 0.47173, 0.47285, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16832, 0.10751, 0.10743, 0.15096, 0.1116, 0.11155, 0.11148, 0.11143, 0.10297, 0.1029, 0.10278, 0.10277, 0.10271, 0.11409, 0.093407, 0.086767, 0.077025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1238, 0.19818, 0.41864, 0.942, 0.94184, 0.94208, 0.94207, 0.94132, 0.94151, 0.94169, 0.94173, 0.94163, 0.94089, 0.94191, 0.92602, 0.92609, 0.92584, 0.92565, 0.92565, 0.92568, 0.92587, 0.92623, 0.9264, 0.92597, 0.92608, 0.9257, 0.92585, 0.9256, 0, 0.94489, 0.9452, 0.94522, 0.94528, 0.94506, 0.86976, 0.86898, 0.86854, 0.868, 0.86782, 0.50945, 0.50964, 0.50794, 0.5076, 0.33197, 0.3318, 0.3318, 0.33175, 0.3317, 0.35481, 0.16734, 0.16737, 0.16742, 0.16743, 0.23635], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"déchets ménagers": {
men: [0.4103, 0.41005, 0.3634, 0.3636, 0.32751, 0.32786, 0.32835, 0.22996, 0.23021, 0.045843, 0.051769, 0.051777, 0.044612, 0.030401, 0.049093, 0.04921, 0.049366, 0.049389, 0.071274, 0.071273, 0.071262, 0.48889, 0.4891, 0.46911, 0.46917, 0.4691, 0.58974, 0.95589, 0.95382, 0.95415, 0.95344, 0.95331, 0.95331, 0.95295, 0.95229, 0.94274, 0.94222, 0.94156, 0.94049, 0.94038, 0.93981, 0.33907, 0.28229, 0.20846, 0.16405, 0.16405, 0.16407, 0.16401, 0.38348, 0.4949, 0.52227, 0.45371, 0.45422, 0.45425, 0.47806, 0.58808, 0.64575, 0.64546, 0.75281, 0.75285, 0.75273, 0.75292, 0.68717, 0.48266, 0.26986, 0.28609, 0.2861, 0.28607, 0.24188, 0.73643, 0.61189, 0.62269, 0.59981, 0.59968, 0.57431, 0.57433, 0.52133, 0.49766, 0.53354, 0.56806, 0.56812, 0.55186, 0.51454, 0.096779, 0.42036, 0.39433, 0.42614, 0.42615, 0.457, 0.31336, 0.2724, 0.28674, 0.28659, 0.33021, 0.31109, 0.32011, 0.32602, 0.56145, 0.46101, 0.4609, 0.46008, 0.46008, 0.46, 0.60001, 0.81332, 0.79227, 0.79239, 0.78353, 0.84078, 0.84033], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"activités polluantes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28974, 0.36458, 0.36453, 0.93737, 0.93701, 0.93637, 0.94274, 0.94222, 0.94156, 0.94049, 0.53205, 0.62956, 0.6299, 0.63054, 0.42738, 0.42712, 0.42713, 0.42718, 0.49936, 0.61357, 0.57783, 0.61862, 0.59698, 0.59766, 0.689, 0.65646, 0.67586, 0.67568, 0.88723, 0.88779, 0.88784, 0.88769, 0.87153, 0.76963, 0.76902, 0.56659, 0.93023, 0.93028, 0.93018, 0.93651, 0.93825, 0.55719, 0.64822, 0.64805, 0.6634, 0.66341, 0.66343, 0.66357, 0.81507, 0.68315, 0.68284, 0.68292, 0.68264, 0.65654, 0.47988, 0.57986, 0.29238, 0.29248, 0.28469, 0.28471, 0.28465, 0.28454, 0.069352, 0.078871, 0.078822, 0.078806, 0.078833, 0.078863, 0.099498, 0, 0.92578, 0.9253, 0.9253, 0.92514, 0.92502, 0.92494, 0.92966, 0.9298, 0.93007, 0.93012, 0.92962], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"électricité photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.668, 0.80693, 0.81951, 0.82144, 0.82083, 0.83963, 0.84381, 0.84349, 0.85178, 0.82339, 0.82869, 0.82811, 0.82859, 0.81688, 0.83721, 0.74532, 0.56865, 0.5581, 0.58865, 0.58867, 0.57404, 0.57381, 0.55887, 0.53826, 0.50068, 0.50069, 0.4905, 0.4864, 0.29435, 0.3166, 0.6186, 0.55364, 0.33985, 0.33988, 0.33982, 0.4592, 0.23399, 0.35715, 0.38291, 0.38298, 0.383, 0.38296, 0.38266, 0.48279, 0.52049, 0.578, 0.55838, 0.51626, 0.4735, 0.43692, 0.56529, 0.60137, 0.45381, 0.35149, 0.35152, 0.35138, 0.34852, 0.23501, 0.18816, 0.1456, 0.15023, 0.16259, 0.18042, 0.15615, 0.11103, 0.26236, 0.30121, 0.34334, 0.34327, 0.3694, 0.38925, 0.44593, 0.44563, 0.44552, 0.43316, 0.43316, 0.43308, 0.58199, 0.88561, 0.79918, 0.75455, 0.46573, 0.46576, 0.18396], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"production photovoltaïque": {
men: [0.4031, 0.24196, 0.54894, 0.54925, 0.5495, 0.55008, 0.5509, 0.55154, 0.55214, 0.55259, 0.55265, 0.55273, 0.55313, 0.55351, 0.40803, 0.9383, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.33526, 0.44752, 0.44718, 0.56385, 0.56385, 0.56363, 0.66953, 0.66927, 0.6689, 0.66844, 0.66768, 0.6676, 0.66719, 0.66756, 0.94653, 0.94275, 0.94218, 0.94221, 0.94233, 0.94196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28288, 0.4373, 0.43738, 0.4374, 0.43736, 0.43701, 0.43748, 0.43734, 0.43737, 0.36917, 0.36909, 0.36909, 0.60928, 0.83078, 0.80718, 0.77282, 0.77247, 0.77256, 0.77224, 0.77237, 0.77216, 0.77177, 0.77141, 0.94463, 0.94465, 0.94471, 0.92955, 0.9292, 0.92837, 0.9279, 0.92732, 0.92713, 0.92745, 0.9278, 0.92471, 0.92408, 0.92386, 0.92338, 0.92338, 0.92322, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fiscalité écologique": {
men: [0.93654, 0.93596, 0.93754, 0.93806, 0.93849, 0.93949, 0.94088, 0.94197, 0.92599, 0.92675, 0.92686, 0.92699, 0.92765, 0.92829, 0.9286, 0.93082, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.11969, 0.11939, 0.10717, 0.10699, 0.10691, 0.1069, 0.1069, 0.10686, 0.10678, 0.081063, 0.11872, 0.13588, 0.1588, 0.11848, 0.10725, 0.10731, 0.19244, 0.19261, 0.19249, 0.1925, 0.19252, 0.36605, 0.36606, 0.44911, 0.4807, 0.50086, 0.50142, 0.55844, 0.95586, 0.95475, 0.95254, 0.95211, 0.95271, 0.95277, 0.95261, 0.94105, 0.44489, 0.58123, 0.62978, 0.5835, 0.58353, 0.58347, 0.58301, 0.58364, 0.55356, 0.5536, 0.62456, 0.62442, 0.62443, 0.5496, 0.74657, 0.60202, 0.42925, 0.34423, 0.28745, 0.27018, 0.27667, 0.32891, 0.37034, 0.23678, 0.21659, 0.21659, 0.22601, 0.26734, 0.26724, 0.21421, 0.22659, 0.24975, 0.27835, 0.2913, 0.2872, 0.28654, 0.39647, 0.52179, 0.51524, 0.51523, 0.51012, 0.49055, 0.4905, 0.49049, 0.49057, 0.49071, 0.49074, 0.48936], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ehpad": {
men: [0.69946, 0.69903, 0.64593, 0.6463, 0.78814, 0.78898, 0.65492, 0.78932, 0.79017, 0.79083, 0.79092, 0.79103, 0.7916, 0.80685, 0.80712, 0.80905, 0.96382, 0.96427, 0.96413, 0.96413, 0.96398, 0, 0, 0, 0, 0, 0, 0, 0.96143, 0.95979, 0.87332, 0.8732, 0.8732, 0.87286, 0.87226, 0.75282, 0.75241, 0.75189, 0.75103, 0.75094, 0.75048, 0.62715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.050966, 0.050953, 0.43411, 0.43438, 0.43441, 0.36437, 0.36447, 0.36446, 0.37647, 0.35911, 0.35918, 0.35919, 0.47848, 0.57379, 0.58264, 0.58245, 0.15248, 0.10224, 0.10222, 0.17918, 0.16664, 0.24274, 0.25129, 0.38445, 0.42933, 0.42938, 0.4292, 0.3708, 0.32798, 0.28359, 0.32457, 0.51052, 0.51053, 0.51057, 0.55163, 0.43687, 0.23936, 0.15986, 0.08801, 0.087992, 0.088023, 0.65193, 0.66184, 0.72111, 0.52185, 0.53739, 0.53739, 0.53729, 0.55818, 0.50554, 0.52592, 0.526, 0.43062, 0.43064, 0.43041], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"rénovation énergétique": {
men: [0.95053, 0.94994, 0.94986, 0.95039, 0.95082, 0.95192, 0.95334, 0.95376, 0.93701, 0.93779, 0.93789, 0.93803, 0.9387, 0.93934, 0.93966, 0.9419, 0.94489, 0.94532, 0.94519, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9465, 0.96324, 0.9627, 0.96204, 0.96094, 0.96082, 0.81475, 0.65971, 0.66997, 0.68156, 0.71559, 0.7156, 0.74707, 0.74678, 0.72615, 0.42957, 0.44249, 0.4425, 0.443, 0.44303, 0.49475, 0.54016, 0.52542, 0.54965, 0.44174, 0.42423, 0.31633, 0.24518, 0.27021, 0.28639, 0.35659, 0.35666, 0.35668, 0.35664, 0.42078, 0.41863, 0.41849, 0.38189, 0.41267, 0.43154, 0.43154, 0.5766, 0.54958, 0.60316, 0.45124, 0.45103, 0.18081, 0.18073, 0.039679, 0.046912, 0.046888, 0, 0, 0, 0, 0, 0, 0.06855, 0.068516, 0.068473, 0.30034, 0.30044, 0.93172, 0.40052, 0.40025, 0.26803, 0.26789, 0.26789, 0.26784, 0.26781, 0.26778, 0.22204, 0.22207, 0.19469, 0.19471, 0.1946], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communautés hospitalières": {
men: [0.56367, 0.93205, 0.93197, 0.93249, 0.93291, 0.93391, 0.9353, 0.93638, 0.9374, 0.94176, 0.94186, 0.942, 0.93772, 0.93836, 0.93287, 0.93509, 0.93806, 0.93849, 0.93836, 0.93835, 0.9382, 0.93964, 0.94005, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9362, 0.95981, 0.95944, 0.95955, 0.95888, 0.95779, 0.95767, 0.95709, 0.95762, 0.95859, 0.95941, 0.95883, 0.95885, 0.95897, 0.95788, 0.93267, 0.93264, 0.93416, 0.93418, 0.93524, 0.56118, 0.56141, 0.56077, 0.56062, 0.56037, 0.56072, 0.56076, 0.56066, 0.56081, 0.26705, 0.26684, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lignes ferroviaires": {
men: [0.85551, 0.79193, 0.57277, 0.67596, 0.67626, 0.5244, 0.67799, 0.52579, 0.52636, 0.52679, 0.52685, 0.52693, 0.5273, 0.52767, 0.52785, 0.5291, 0.94783, 0.94826, 0.94813, 0.94813, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.77476, 0.77387, 0.80506, 0.80457, 0.80501, 0.836, 0.83671, 0.83621, 0.83623, 0.83633, 0.96251, 0.96253, 0.92156, 0.92517, 0.44155, 0.44205, 0.35601, 0.35616, 0.31691, 0.23865, 0.23854, 0.23869, 0.23871, 0.23867, 0.17489, 0.14912, 0.15236, 0, 0, 0, 0, 0, 0, 0.28607, 0.28609, 0.28601, 0.28595, 0.28596, 0.28596, 0.63733, 0.76282, 0.76296, 0.76261, 0.7627, 0.76238, 0.94269, 0.94243, 0.93571, 0.93528, 0.93559, 0.93561, 0.93567, 0.93545, 0, 0, 0, 0, 0, 0, 0, 0.59343, 0.59303, 0.74082, 0.74044, 0.31548, 0.31542, 0.16119, 0.16118, 0.16118, 0.1612, 0.14638, 0.14639, 0.14631], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Développement des territoires": {
men: [0.18885, 0.28362, 0.36184, 0.36204, 0.36221, 0.32414, 0.56033, 0.61359, 0.89364, 0.89969, 0.89979, 0.896, 0.89136, 0.8874, 0.85971, 0.8087, 0.80059, 0.80096, 0.80085, 0.80084, 0.33846, 0.33898, 0.33913, 0, 0, 0, 0, 0, 0.90467, 0.81771, 0.68524, 0.68515, 0.68515, 0.51089, 0.51054, 0.47561, 0.47535, 0.47502, 0.47448, 0.47442, 0.47414, 0.4744, 0.075623, 0.08834, 0.1128, 0.1128, 0.11282, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.057862, 0.067372, 0.085718, 0.085723, 0.085714, 0.55368, 0.58814, 0.95904, 0.95911, 0.95886, 0.95865, 0.95866, 0.95869, 0.95889, 0.69203, 0.69215, 0.68969, 0.61372, 0.61347, 0, 0, 0.092746, 0.092704, 0.092734, 0.092736, 0.092742, 0.076723, 0.15368, 0.4807, 0.48045, 0.39925, 0.50033, 0.50051, 0.54974, 0.59118, 0.58816, 0.58801, 0.61299, 0.61299, 0.61288, 0.75996, 0.73661, 0.63118, 0.48467, 0.64779, 0.64782, 0.64748], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"équipements photovoltaïques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.54662, 0.97418, 0.97475, 0.97309, 0.97237, 0.97223, 0.97223, 0.97186, 0.97119, 0.97082, 0.97028, 0.96961, 0.9685, 0.96839, 0.96683, 0.95465, 0, 0, 0.9372, 0.93722, 0.93734, 0.93697, 0.93699, 0.55771, 0.30808, 0.30809, 0.30844, 0.30846, 0.30859, 0.30823, 0.30815, 0.30801, 0, 0, 0, 0, 0, 0.22991, 0.93813, 0.9383, 0.93835, 0.93825, 0.93751, 0.93852, 0.93822, 0.93828, 0.93803, 0.93783, 0.93784, 0.93787, 0.93806, 0.934, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.47273, 0.34372, 0.25197, 0.25174, 0.25162, 0.3429, 0.34283, 0.34295, 0.34308, 0.34193, 0.3417, 0.34162, 0.34144, 0.34144, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"secteur photovoltaïque": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.58639, 0.88155, 0.87964, 0.95921, 0.9585, 0.95836, 0.95836, 0.958, 0.95961, 0.95924, 0.95871, 0.95804, 0.95695, 0.81622, 0.80803, 0.57793, 0.57852, 0.57901, 0.57866, 0.57867, 0.57875, 0.57852, 0.24393, 0.24392, 0.24382, 0.24383, 0.2441, 0.9321, 0, 0, 0, 0.92862, 0.9292, 0.93573, 0.93557, 0.93581, 0.9358, 0.95189, 0.95478, 0.95496, 0.955, 0.9549, 0.95415, 0.95518, 0.95487, 0.95431, 0.41174, 0.39509, 0.3951, 0.39511, 0.39519, 0.15697, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"fonction publique territoriale": {
men: [0.15232, 0.19485, 0.11988, 0.17558, 0.17565, 0.29001, 0.38082, 0.32246, 0.46122, 0.95276, 0.95287, 0.953, 0.95369, 0.95434, 0.95467, 0.95694, 0.95998, 0.96042, 0.96028, 0.95823, 0.95528, 0.95675, 0.21789, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.015704, 0.020045, 0.029647, 0.11416, 0.20982, 0.20958, 0.20956, 0.20943, 0.26591, 0.26618, 0.2664, 0.32237, 0.32238, 0.32242, 0.4431, 0.62095, 0.72589, 0.73933, 0.67544, 0.65522, 0.65527, 0.60351, 0.50627, 0.50614, 0.50092, 0.33563, 0.33565, 0.33559, 0.3637, 0.3637, 0.2485, 0.26374, 0.051248, 0.053777, 0.034866, 0.19516, 0.18188, 0.17345, 0.17597, 0.19828, 0.19824, 0.19824, 0.20991, 0.20379, 0.27696, 0.26711, 0.27651, 0.27654, 0.42969, 0.20919, 0.36783, 0.47831, 0.36916, 0.25019, 0.2502, 0.25021, 0.18692, 0.2278, 0.2276, 0.17242, 0.21101, 0.21097, 0.21104, 0.21112, 0, 0, 0, 0.3313, 0.3313, 0.33124, 0.3312, 0.19328, 0.14728, 0.1098, 0.10983, 0.10984, 0.10978], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"installations de méthanisation": {
men: [0.95071, 0.95012, 0.95004, 0.95057, 0.951, 0.95202, 0.95344, 0.95454, 0.95557, 0.95636, 0.95647, 0.95661, 0.95729, 0.95795, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96221, 0.9615, 0.96136, 0.96136, 0.961, 0.96034, 0.95997, 0.95944, 0.95877, 0.95768, 0.95756, 0.95698, 0.6887, 0.68939, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.17773, 0.17759, 0.17762, 0.17766, 0.17766, 0.17765, 0.17751, 0.1777, 0.17764, 0.17765, 0.27266, 0.53874, 0.53875, 0.93385, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.65398, 0.65357, 0.65344, 0.65367, 0.4407, 0.43924, 0.2455, 0.24544, 0.24531, 0.24531, 0.24527, 0.24524, 0.27631, 0.2763, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Risques industriels": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9431, 0.58441, 0.58491, 0.58456, 0.58457, 0.58465, 0.85317, 0.85319, 0.85316, 0.85794, 0.80959, 0.81051, 0.81056, 0.8109, 0.77931, 0.88439, 0.884, 0.89235, 0.89241, 0.89225, 0.63708, 0.63708, 0.63657, 0.5385, 0.9367, 0.93675, 0.93665, 0.93591, 0.93692, 0.93661, 0.58282, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.071832, 0.093531, 0.29097, 0.36187, 0.58794, 0.58782, 0.58802, 0.58824, 0.62024, 0.68727, 0.6871, 0.9406, 0.9406, 0.70365, 0.67724, 0.67718, 0.5498, 0.42203, 0.42215, 0.42218, 0.42195], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"submersions marines": {
men: [0.14886, 0.11682, 0.10486, 0.10492, 0.10496, 0.1283, 0.067729, 0.10126, 0.12529, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95074, 0.95115, 0.95127, 0.95114, 0.9517, 0.94929, 0.94723, 0.94562, 0.94492, 0.94479, 0.94479, 0.94843, 0.94778, 0.94741, 0.93686, 0.93621, 0.93514, 0.93503, 0.30036, 0.30053, 0.20468, 0.20485, 0.20473, 0.20473, 0.20476, 0, 0, 0, 0, 0, 0, 0, 0.23259, 0.23232, 0.92903, 0.92862, 0.9292, 0.92926, 0.92911, 0.92934, 0.92933, 0.9286, 0.92878, 0.92896, 0.929, 0.9289, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.38497, 0.92132, 0.92159, 0.92164, 0.92115], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 