import { Grid, Stack, Typography } from "@mui/material";
import { Step } from "components/classes/Step";
import Step1Image from 'assets/step1-image.svg';
import Image from "next/image";
import GameFrame from "components/atoms/GameFrame";

const backendDomain = process.env.NEXT_PUBLIC_BACKEND_DOMAIN || 'http://103.75.198.244/';

const Step1 = new Step({
  id: "Step1",
  x: 0,
  y: 0,
  scale: 1,
  children:
    <Grid container alignItems={'center'} justifyContent={'space-between'} flexDirection={'row-reverse'}>
      <Grid item xs={4}>
        <Stack marginLeft={4}>
          <Typography variant="h5" alignSelf={'end'} gutterBottom>
            اینترنت، منبع عظیم داده‌های متنی
          </Typography>
          <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={6}>
            Internet: A Huge Source of Textual Data
          </Typography>
          <Typography>
            حجم عظیم داده‌های متنی در اینترنت از منابع مختلفی مانند کتاب‌های الکترونیکی، ویکی‌پدیا، شبکه‌های اجتماعی، سایت‌ها و غیره به دست می‌آید. این داده‌ها شامل متون، مقالات، نظرات کاربران، خبرها، محتواهای ویدئویی و بسیاری اطلاعات دیگر است. حجم عظیم این داده‌ها امکانات بسیاری را برای ساخت مدل‌های زبانی مبتنی بر یادگیری ماشین فراهم می‌کند.
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Image src={Step1Image} width={0} height={0} style={{ width: '100%' }} alt="" />
      </Grid>
    </Grid>,
  nextStep: 'Step2',
})

const Step2 = new Step({
  id: "Step2",
  parent: Step1,
  x: 1200,
  y: 0,
  scale: 1,
  children:
    <Grid spacing={4} container alignItems={'center'} justifyContent={'space-between'} flexDirection={'row-reverse'}>
      <Grid item xs={3}>
        <Typography variant="h5" alignSelf={'end'} gutterBottom>
          دگرنمایی واژگان
        </Typography>
        <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={6}>
          Word Embedding
        </Typography>
        <Typography>
          دگرنماییِ واژگان یعنی نمایش واژگان به شکل نقاطی در فضای چندبُعدی به منظور تجزیه و تحلیل متن. این تکنیک معمولا با استفاده از الگوریتم‌های یادگیری ماشین و داده‌های با حجم عظیم اجرا می‌شود، به نحوی که نقاطی که به هم نزدیک‌تر هستند از نظر معنی نیز مشابه باشند. برای دستیابی به این هدف، تمام واژگانِ یک زبان در فضایی چندصد-بُعدی قرار می‌گیرند که برای انسان قابل‌تصور نیست. اما با استفاده از الگوریتم‌های ریاضیاتی می‌توان این نقاط را در فضای دو یا سه‌بُعدی نیز قرار داد، که البته به مدل‌سازی ضعیف‌تر می‌انجامد.
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <GameFrame src={`${backendDomain}`} />
      </Grid>
    </Grid>,
  nextStep: 'Step3',
})

const Step3 = new Step({
  id: "Step3",
  parent: Step2,
  x: 1200,
  y: 0,
  scale: 1,
  children:
    <Grid spacing={4} container alignItems={'center'} justifyContent={'space-between'} flexDirection={'row-reverse'}>
      <Grid item xs={3}>
        <Typography variant="h5" alignSelf={'end'} gutterBottom>
          قرابت معنایی
        </Typography>
        <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={6}>
          Cluster Property
        </Typography>
        <Typography>
          الگوریتم‌های دگرنمایی واژگان به شکلی تعبیه می‌شوند که واژگانِ با معنای مشابه به طور خودکار در کنار یکدیگر قرار گیرند. برای مثال همان طور که در نمودار مقابل مشاهده می‌کنید نام‌های روزهای هفته، نام‌های شهرها و نام‌های کشورها و حتی اسامی مردانه و زنانه هر کدام شبیه یک خوشه در کنار یکدیگر قرار گرفته اند.
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <GameFrame src={`${backendDomain}?show_colors=true/`} />
      </Grid>
    </Grid>,
  nextStep: 'Step4',
})

const Step4 = new Step({
  id: "Step4",
  parent: Step3,
  x: 1200,
  y: 0,
  scale: 1,
  children:
    <Grid spacing={4} container alignItems={'center'} justifyContent={'space-between'} flexDirection={'row-reverse'}>
      <Grid item xs={3}>
        <Typography variant="h5" alignSelf={'end'} gutterBottom>
          روابط میان جفت کلمات
        </Typography>
        <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={6}>
          Vector Property
        </Typography>
        <Typography>
          یکی دیگر از ویژگی‌هایی که در دگرنمایی واژگان حفظ می‌شود، روابط معنایی بین زوج کلمات است. در واقع انتظار داریم همان بُرداری که فرانسه را به پایتخت آن یعنی پاریس متصل می‌کند، آلمان را نیز به پایتخت‌اش یعنی برلین متصل کند.
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <GameFrame src={`${backendDomain}?show_colors=true&show_relations=true/`} />
      </Grid>
    </Grid>,
  nextStep: 'Step5',
})

const Step5 = new Step({
  id: "Step5",
  parent: Step4,
  x: 1200,
  y: 0,
  scale: 1,
  children:
    <Grid spacing={4} container alignItems={'center'} justifyContent={'space-between'} flexDirection={'row-reverse'}>
      <Grid item xs={3}>
        <Typography variant="h5" alignSelf={'end'} gutterBottom>
          کلمه خودتان را به نمودار کلمات اضافه کنید
        </Typography>
        <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={6}>
          Add your own word to the word chart
        </Typography>
        <Typography>
          در بخش‌های پیشین، با دگرنمایی واژگان و ویژگی‌های جالب آن آشنا شدید. در این بخش می‌توانید کلمات دلخواه خود را وارد کرده و نقطه‌ی مربوط به آنها را بر روی نمودار مشاهده کنید.
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <GameFrame src={`${backendDomain}?add_words=true&show_colors=true/`} />
      </Grid>
    </Grid>,
  nextStep: 'Step1',
})

export default [
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
];
