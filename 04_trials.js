// In this file you can specify the trial data for your experiment

const images = ['11_50_same.jpg','2_50_same.jpg','6_150_same.jpg','2_150_different.jpg','10_50_same.jpg','10_150_different.jpg','10_150_same.jpg','10_50_different.jpg','11_150_different.jpg','11_150_same.jpg','11_50_different.jpg','12_150_different.jpg','12_150_same.jpg','12_50_different.jpg','12_50_same.jpg','13_150_different.jpg','13_150_same.jpg','13_50_different.jpg','13_50_same.jpg','14_150_different.jpg','14_150_same.jpg','14_50_different.jpg','14_50_same.jpg','15_150_different.jpg','15_150_same.jpg','15_50_different.jpg','15_50_same.jpg','1_150_different.jpg','1_150_same.jpg','1_50_different.jpg','1_50_same.jpg','2_150_same.jpg','2_50_different.jpg','3_150_different.jpg','3_150_same.jpg','3_50_different.jpg','3_50_same.jpg','4_150_different.jpg','4_150_same.jpg','4_50_different.jpg','4_50_same.jpg','5_150_different.jpg','5_150_same.jpg','5_50_different.jpg','5_50_same.jpg','6_150_different.jpg','6_50_different.jpg','6_50_same.jpg','7_150_different.jpg','7_150_same.jpg','7_50_different.jpg','7_50_same.jpg','8_150_different.jpg','8_150_same.jpg','8_50_different.jpg','8_50_same.jpg','9_150_different.jpg','9_150_same.jpg','9_50_different.jpg','9_50_same.jpg']

const trial_info = {
    practice_trials: parse_mental_rotation_images(images.slice(0, 12)),
    main_trials: parse_mental_rotation_images(images.slice(12))
};


