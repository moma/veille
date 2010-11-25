var years = [196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305]; 
var jobs= {
"armes biologiques": {
men: [0, 0, 0, 0, 0.94566, 0.9457, 0.94337, 0.32136, 0.32091, 0.32078, 0.32066, 0.23784, 0.23788, 0.23791, 0.23785, 0.2379, 0.23792, 0.23773, 0, 0.27468, 0.22642, 0.3664, 0.36708, 0.36734, 0.53346, 0.69674, 0.69754, 0.76895, 0.76972, 0.76809, 0.76759, 0.58668, 0.58687, 0.48973, 0.6045, 0.60446, 0.60365, 0.23953, 0.13602, 0.13606, 0.13601, 0, 0, 0, 0, 0, 0, 0, 0.04781, 0.047757, 0.047817, 0.097052, 0.097068, 0.097014, 0.096924, 0.14215, 0.14217, 0.14219, 0.93868, 0.93851, 0.93856, 0.93886, 0, 0, 0, 0, 0, 0, 0, 0, 0.938, 0.93738, 0.93744, 0.93754, 0.93529, 0.93492, 0.9349, 0.93586, 0.93634, 0.93636, 0.93645, 0.93613, 0.93662, 0.93662, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"mise en culture": {
men: [0, 0, 0, 0, 0, 0.066394, 0.40127, 0.47419, 0.41207, 0.42079, 0.42063, 0.42069, 0.40194, 0.38327, 0.38522, 0.51962, 0.54396, 0.54353, 0.54352, 0.55396, 0.2479, 0.04956, 0.0874, 0.017299, 0.016926, 0.016916, 0.020305, 0.024905, 0.031575, 0.04115, 0.041123, 0.031863, 0.031873, 0.026963, 0.02696, 0.026959, 0.026922, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15082, 0.087659, 0.061988, 0.056024, 0.05714, 0.057129, 0.057132, 0.057151, 0.0572, 0.054649, 0.091033, 0.09837, 0.093264, 0.090403, 0.049214, 0.070426, 0.12246, 0.11916, 0.11916, 0.11918, 0.11889, 0.21255, 0.21254, 0.20692, 0.16878, 0.16879, 0.18861, 0.20316, 0.19982, 0.27698, 0.27774, 0.35286, 0.35286, 0.35279, 0.35416, 0.27245, 0.27224, 0.32444, 0.45152, 0.45162, 0.45161, 0.45204, 0.95065, 0, 0, 0.94833, 0.9479, 0.94792, 0.94693, 0.94719, 0.58378, 0.34851, 0.34886, 0.34878, 0.34873, 0.17236], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"lobby nucléaire": {
men: [0, 0, 0, 0.95415, 0.95385, 0.95389, 0.95154, 0.9516, 0.95026, 0.43422, 0.43406, 0.43411, 0.43419, 0.43424, 0.43413, 0.43422, 0.33418, 0, 0.35221, 0.35219, 0.3529, 0.35324, 0.3539, 0.24253, 0.25706, 0.2569, 0.2572, 0.25696, 0.25722, 0.25667, 0.27811, 0.20427, 0.11714, 0.11716, 0.093745, 0.093738, 0.093612, 0.029061, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94647, 0.94715, 0.94703, 0.94712, 0.94686, 0.94669, 0.34875, 0.34852, 0.34854, 0.34858, 0.34774, 0.3476, 0.3476, 0.34795, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"catastrophe nucléaire": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.60526, 0.60531, 0.94622, 0.94606, 0.94305, 0.94242, 0.94248, 0.94258, 0.94032, 0.93994, 0.93993, 0.9409, 0.94138, 0.94139, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94358, 0.94315, 0.94317, 0.94218, 0.94245, 0.94192, 0.9421, 0.94307, 0.94283, 0.2403, 0.24026], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"expertise scientifique": {
men: [0, 0, 0, 0.19192, 0.13484, 0.13485, 0.15448, 0.15449, 0.14186, 0.14313, 0.14307, 0.14309, 0.14312, 0.14313, 0.1431, 0.14898, 0.149, 0.087711, 0.1265, 0.12649, 0.078689, 0.078765, 0.084889, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.041984, 0.039777, 0.039774, 0.03972, 0.065468, 0.065451, 0.083346, 0.12382, 0.12384, 0.10722, 0.090428, 0.090419, 0.090483, 0.087314, 0.049214, 0.10569, 0.10557, 0.10571, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.67443, 0.69658, 0.71683, 0.71674, 0.71681, 0.82186, 0.83058, 0.82793, 0.93014, 0.93021, 0.9303, 0.92808, 0.9277, 0.92769, 0.78428, 0.75131, 0.5645, 0.56455, 0.56436, 0.55265, 0.40005, 0.40114, 0.059126, 0.059125, 0.059114, 0.059344, 0.059354, 0.05931, 0.082499, 0.066942, 0.044674, 0.026564, 0.024748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"pieds de vigne transgénique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.021431, 0.017696, 0.017133, 0.016919, 0.016547, 0.016558, 0.016567, 0.016556, 0.015761, 0.015229, 0.020273, 0.019953, 0.01943, 0.019442, 0.014842, 0.026152, 0.03086, 0.033288, 0.035831, 0.0358, 0.035791, 0.035801, 0.050262, 0.074351, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.42979, 0.43017, 0.42947, 0.42907, 0.42937, 0.42932, 0.42936, 0.42924, 0.42917, 0.51883, 0.51848, 0.51852, 0.51857, 0.51733, 0.9388, 0.93879, 0.93975, 0.94023, 0.94025, 0.94035, 0.94002, 0.94051, 0.94052, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"polluants organiques": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94654, 0.95312, 0.95008, 0.95336, 0.95342, 0.95352, 0.95124, 0.95085, 0.95084, 0.77211, 0.77251, 0.77252, 0.7726, 0.77233, 0.70533, 0.2403, 0.24096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"atteintes à l' environnement": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.074352, 0.15171, 0.15162, 0.12352, 0.067825, 0.049364, 0.067749, 0.067704, 0.067745, 0.067767, 0.067776, 0.059843, 0.059839, 0.047235, 0.072624, 0.038357, 0.038368, 0.040653, 0.055228, 0.078701, 0.07882, 0.078812, 0.067395, 0.067404, 0.067418, 0.077294, 0.077209, 0.11604, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.71762, 0.71753, 0.71759, 0.71739, 0.71727, 0.37272, 0.37247, 0.37249, 0.37253, 0.37164, 0.37149, 0.37148, 0.37186, 0.37205, 0, 0, 0, 0.14918, 0.14918, 0.93832, 0.93902, 0.939, 0.93882, 0.94248, 0.94264, 0.94194, 0.94215, 0.94096, 0.94116, 0.94114, 0.94204, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"semences paysannes": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.58816, 0.58762, 0.58759, 0.5877, 0.58774, 0.5879, 0.5878, 0.58783, 0.94987, 0.9507, 0.94916, 0.94827, 0.94894, 0.94883, 0, 0, 0, 0.47759, 0.47727, 0.4773, 0.47735, 0.47621, 0.47601, 0.47601, 0.4765, 0.47674, 0.47675, 0.47679, 0.94002, 0.94051, 0.94052, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"ère numérique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.96064, 0.9616, 0.95957, 0.95893, 0.95952, 0.95982, 0.95995, 0.95987, 0.9598, 0.2212, 0.221, 0.22095, 0.22101, 0.22093, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.22817, 0.26157, 0.46696, 0.4672, 0.46721, 0.46725, 0.46709, 0.5131, 0.5131, 0.5145, 0.51488, 0.51487, 0.51477, 0.51678, 0.263, 0.26281, 0.26287, 0.26254, 0.26259, 0.26259, 0.26284, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"arsenal nucléaire": {
men: [0.082622, 0.93175, 0.93261, 0.93268, 0.93238, 0.93243, 0.93013, 0.93019, 0.92888, 0, 0, 0, 0, 0, 0.32571, 0.32578, 0.32581, 0.32556, 0.32556, 0.32553, 0.28508, 0.28536, 0.28589, 0.28609, 0.67177, 0.71429, 0.71511, 0.71445, 0.16553, 0.10291, 0.10285, 0.10291, 0.10294, 0.22014, 0.26285, 0.22279, 0.22249, 0.2223, 0.22224, 0.14503, 0.14498, 0.14501, 0.21119, 0.17536, 0.094269, 0.071029, 0.071038, 0, 0, 0, 0.098929, 0.098911, 0.098927, 0.098872, 0.098781, 0.098776, 0.098794, 0.070655, 0.070927, 0.083015, 0.083019, 0.083046, 0.083118, 0.082984, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"autorisation de culture": {
men: [0.059452, 0.063165, 0.059716, 0.05972, 0.059701, 0.049291, 0.062417, 0.19117, 0.18475, 0.18467, 0.1846, 0.18462, 0.17731, 0.17733, 0.20548, 0.24188, 0.25035, 0.23258, 0.22226, 0.25198, 0.45413, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.075664, 0.13119, 0.14173, 0.13142, 0.11952, 0.26317, 0.26336, 0.26339, 0.26345, 0.33271, 0.33235, 0.31197, 0.35088, 0.35094, 0.31988, 0.28739, 0.28915, 0.45207, 0.47633, 0.46034, 0.46025, 0.46028, 0.27109, 0.24996, 0.24956, 0.28248, 0.28268, 0.28265, 0.28267, 0.27352, 0.26366, 0.18751, 0.19373, 0.13219, 0.13221, 0.13189, 0.11777, 0.11777, 0.11789, 0.10971, 0.10971, 0.10972, 0.1066, 0.10973, 0.036529, 0.040985, 0.04144, 0.039704, 0.039696, 0.039851, 0.06792, 0.06787, 0.067885, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95164, 0.34615, 0.34595, 0.17389, 0.17407, 0.17402, 0.174, 0.17397], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communauté juive": {
men: [0.21976, 0.21975, 0.20305, 0.20307, 0.203, 0.20301, 0.14393, 0.10859, 0.050534, 0.045991, 0.045974, 0.04598, 0.045988, 0.056364, 0.097556, 0.097576, 0.048615, 0.067701, 0.19134, 0.20893, 0.23069, 0.26083, 0.74236, 0.76537, 0.77579, 0.76335, 0.76423, 0.2371, 0.22657, 0.2261, 0.22373, 0.221, 0.14949, 0.041579, 0.03688, 0.03639, 0.015801, 0.0080099, 0.0039931, 0.004, 0.0039986, 0.009073, 0.0090251, 0.0089397, 0.0087986, 0.0087054, 0.0083209, 0.028063, 0.049601, 0.07586, 0.11792, 0.10338, 0.10339, 0.068676, 0.068613, 0.021117, 0.020408, 0.021716, 0.02455, 0.024149, 0.034963, 0.032466, 0.029919, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15076, 0.6892, 0.68921, 0.80424, 0.80447, 0.80402, 0.80417, 0.70079, 0.80991, 0.81843, 0.82401], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"matières nucléaires": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.079391, 0.079551, 0.079628, 0.079777, 0.13025, 0.95513, 0.95454, 0.95563, 0.95863, 0.95958, 0.95756, 0.95693, 0.95751, 0.95781, 0.95406, 0.95398, 0.95392, 0.95264, 0.95181, 0.94499, 0.94525, 0.94492, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Jacques Delors": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9438, 0.9439, 0.94316, 0.94315, 0.94309, 0.94499, 0.9459, 0.94767, 0.94832, 0.94879, 0.9482, 0.94929, 0.94841, 0.94936, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.16115, 0.2813, 0.28135, 0.21405, 0.2141, 0.14477, 0.076559, 0.071948, 0.072017, 0.07194, 0.07189, 0.07189, 0.07183, 0.081627, 0.04296, 0, 0, 0, 0.04868, 0.063232, 0.29536, 0.44462, 0.44455], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"transformation écologique": {
men: [0.82638, 0.82634, 0.95808, 0.95815, 0.64669, 0.50085, 0.49962, 0.30416, 0.30373, 0.30361, 0.30349, 0.30353, 0.30359, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1737, 0.13067, 0.13066, 0.13075, 0.18697, 0.17137, 0.21221, 0.29047, 0.24365, 0.22852, 0.27069, 0.27054, 0.25336, 0.25335, 0.14022, 0.19709, 0.14573, 0.1457, 0.14571, 0.1579, 0.11268, 0.1125, 0.1223, 0.078443, 0, 0, 0, 0, 0, 0, 0, 0.027285, 0.027219, 0.027208, 0.066547, 0.066615, 0.043621, 0.043622, 0.043627, 0.043612, 0.3454, 0.26063, 0.27067, 0.29465, 0.32766, 0.31583, 0.26615, 0.26619, 0.26599, 0.26605, 0.29969, 0.29975, 0.29974, 0.30003, 0.075458, 0.10876, 0.082881, 0.082811, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"génie génétique": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.045132, 0.057635, 0.10381, 0.14497, 0.14501, 0.30407, 0.12259, 0.56533, 0.50891, 0.50886, 0.50922, 0.5481, 0.47242, 0.47211, 0.39839, 0.41553, 0.41545, 0.41552, 0.41529, 0.41491, 0.54067, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9464, 0.94649, 0.94622, 0.19406, 0.19345, 0.29777, 0.29779, 0.29782, 0.29711, 0.29699, 0.29699, 0.29729, 0.29744, 0.29745, 0.15652, 0.15646, 0.15654, 0.62617, 0.62788, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.80613], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"urgence sociale": {
men: [0.46287, 0.46285, 0.46328, 0.46331, 0.55834, 0.70699, 0.70525, 0.95677, 0.95542, 0.95502, 0.95466, 0.95478, 0.95496, 0.95506, 0.95086, 0.95104, 0.95115, 0.9504, 0.94767, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"amflora": {
men: [0, 0.013285, 0.011249, 0.01125, 0.010931, 0.0092187, 0.0090894, 0.017839, 0.017814, 0.024288, 0.024279, 0.024018, 0.023601, 0.039896, 0.051693, 0.073639, 0.10229, 0.10221, 0.1119, 0.21228, 0.22802, 0.23317, 0.23361, 0.31427, 0.30224, 0.37386, 0.61417, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.066888, 0.028332, 0.016143, 0.015484, 0.015483, 0.015494, 0.015496, 0.0137, 0.014888, 0.015972, 0.01563, 0.015024, 0.015027, 0.015018, 0, 0, 0, 0, 0, 0, 0, 0.051721, 0.051766, 0.086108, 0.1268, 0.13904, 0.13902, 0.13903, 0.13376, 0.14386, 0.1434, 0.15594, 0.18935, 0.20347, 0.24845, 0.59241, 0.5924, 0.72856, 0.34472, 0.34473, 0.34476, 0.30671, 0.30186, 0.3668, 0.3678, 0.36807, 0.33667, 0.3366, 0.27211, 0.20308, 0.20293, 0.20297, 0.23414, 0.23419, 0.23419, 0.31102, 0.48638, 0, 0.025763, 0.080974, 0.13848, 0.13849, 0.21218, 0.21224, 0.21212, 0.21216, 0.21238, 0.21232, 0.2123, 0.21226], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"phosphore blanc": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9344, 0.93804, 0.94954, 0.94884, 0.94905, 0.94785, 0.94805, 0.94803, 0.94894, 0.94792, 0.94727, 0.94727, 0.94647, 0.94605, 0.94269, 0.9417, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vaccins pandémiques": {
men: [0.47535, 0.25896, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.94917, 0.94938, 0.94819, 0.94838, 0.94837, 0.94928, 0.94826, 0.9476, 0.9476, 0.94681, 0.94638, 0.9464, 0.94541, 0.94567, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"vache folle": {
men: [0.0070404, 0.0070401, 0.0079229, 0.0080407, 0.02784, 0.046212, 0.047667, 0.040431, 0.039305, 0.039873, 0.039858, 0.042729, 0.040207, 0.050788, 0.10624, 0.10626, 0.10627, 0.10619, 0.059595, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1622, 0.18448, 0.099478, 0.099549, 0.099562, 0.099582, 0.099516, 0.088514, 0.088624, 0.095934, 0.095949, 0.095896, 0.088729, 0.10321, 0, 0, 0, 0, 0, 0, 0, 0.44001, 0.53799, 0.45427, 0.50753, 0.50758, 0.60432, 0.60422, 0.51721, 0.55804, 0.55808, 0.55814, 0.5568, 0.55658, 0.55657, 0.44232, 0.35754, 0.27578, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.10228, 0.13746, 0.13731, 0.2939, 0.2939, 0.29365, 0.29352, 0.34123, 0.4132, 0.26637, 0.26622, 0.26627, 0.28584, 0.31571, 0.058111, 0.027015], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"conversion écologique": {
men: [0, 0, 0.9412, 0.94127, 0.94097, 0.94101, 0.93869, 0.93875, 0.93743, 0.93703, 0.93668, 0.93679, 0.93697, 0.93707, 0.93683, 0.93702, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.063435, 0.0634, 0.067015, 0.076281, 0.076295, 0.12483, 0.13581, 0.13578, 0.14859, 0.14864, 0.11597, 0.058481, 0.057776, 0.031375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"culture expérimentale": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.49217, 0.49251, 0.49275, 0.49244, 0.49301, 0.18487, 0.19613, 0.18644, 0.18632, 0.18643, 0.18649, 0.20992, 0.2099, 0.20989, 0.093494, 0.093413, 0.17736, 0.17741, 0.17735, 0.32187, 0.60268, 0.95066, 0.95057, 0.95124, 0.95137, 0.95157, 0.95093, 0.94988, 0.95106, 0.95088, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"communauté chrétienne": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.95667, 0.95732, 0.9578, 0.9572, 0.9583, 0.56318, 0.56374, 0.56256, 0.56218, 0.56253, 0.56271, 0.14001, 0.14, 0.11801, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.27743, 0.31876, 0.31915, 0.37005, 0.37011, 0.36991, 0.42818, 0.42815, 0.42823, 0.37388, 0.37398, 0.49348, 0.49351, 0.64326, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"têtes nucléaires": {
men: [0.2395, 0.23949, 0.12856, 0.12857, 0.21367, 0.21368, 0.21315, 0.11207, 0.11192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.34558, 0.34598, 0.34566, 0.346, 0.34527, 0.34504, 0.34525, 0.34536, 0.34541, 0.93944, 0.93937, 0.93811, 0.9373, 0.93705, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1386, 0.13857, 0.13859, 0.13852, 0.13839, 0.13838, 0.13841, 0.19347, 0.32132, 0.94594, 0.94599, 0.94629, 0.24182, 0.24143, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"Croix Blanche": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0.98087, 0.982, 0.98163, 0.91907, 0.91925, 0.91934, 0.91911, 0.9193, 0.9194, 0.91867, 0.91867, 0.91861, 0.92046, 0.92134, 0.65766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"h5n1": {
men: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.18401, 0.18422, 0.18405, 0.19818, 0.19776, 0.17784, 0.17795, 0.17801, 0.17803, 0.23028, 0.23026, 0.22995, 0.22975, 0.61932, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.28525, 0.077958, 0.077998, 0.04739, 0.047519, 0.047554, 0.047554, 0.047544, 0.04773, 0.053951, 0.10756, 0.10758, 0.15626, 0.15629, 0.11339, 0.21245, 0.21222, 0.94246, 0.94247, 0.94168, 0.94125, 0.94127, 0.94029, 0.94055, 0.93363, 0.93381, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
}, 
"réserves pétrolières": {
men: [0, 0, 0, 0, 0, 0, 0.94972, 0.94978, 0.94844, 0.94805, 0.94769, 0.9478, 0.94798, 0.94808, 0.51189, 0.51199, 0.51205, 0.51165, 0.51164, 0.51161, 0.35273, 0.35307, 0.35373, 0.35397, 0.35415, 0.35393, 0.35433, 0.35401, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
women: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
} 
}; 