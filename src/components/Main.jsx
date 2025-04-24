import { Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <div className="bg-green-100 py-20 px-4 text-center">
      <Typography variant="h3" className="font-bold text-green-700 mb-4">
        Tabiiy mahsulotlar do'koni
      </Typography>
      <Typography variant="subtitle1" className="mb-6">
        Yashil va sog'lom hayot sari birinchi qadamni biz bilan boshlang!
      </Typography>
      <Button variant="contained" color="success" size="large">
        Xarid qilish
      </Button>
    </div>
  );
};

export default Hero;
