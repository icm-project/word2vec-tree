import { Stack, Typography } from "@mui/material";
import { Step } from "components/classes/Step";
import Step1Imgage from 'assets/step1-image.svg';
import Image from "next/image";
import GameFram from "components/atoms/Gamefram";

const Step1 = new Step({
  id: "Step1",
  x: 0,
  y: 0,
  scale: 1,
  children:
    <Stack position={'static'} alignItems={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h5" alignSelf={'end'} gutterBottom>
        اینترنت، منبع عظیم داده‌های متنی
      </Typography>
      <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={8}>
        Internet: A Huge Source of Textual Data
      </Typography>
      <Typography>
        حجم عظیم داده‌های متنی در اینترنت از منابع مختلفی مانند کتاب‌های الکترونیکی، ویکی‌پدیا، شبکه‌های اجتماعی، سایت‌ها و غیره به دست می‌آید. این داده‌ها شامل متون، مقالات، نظرات کاربران، خبرها، محتواهای ویدئویی و بسیاری اطلاعات دیگر است. حجم عظیم این داده‌ها امکانات بسیاری را برای ساخت مدل‌های زبانی مبتنی بر یادگیری ماشین فراهم می‌کند.
      </Typography>
      <Image src={Step1Imgage} width={0} height={0} style={{ width: '100%', marginTop: 60 }} alt="" />
    </Stack>,
  nextStep: 'Step2',
})

const Step2 = new Step({
  id: "Step2",
  parent: Step1,
  x: 1200,
  y: 0,
  scale: 1,
  children:
    <Stack position={'static'} alignItems={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h5" alignSelf={'end'} gutterBottom>
        دگرنمایی واژگان
      </Typography>
      <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={8}>
        Word Embedding
      </Typography>
      <Typography>
        دگرنماییِ واژگان یعنی نمایش واژگان به شکل نقاطی در فضای چندبُعدی به منظور تجزیه و تحلیل متن. این تکنیک معمولا با استفاده از الگوریتم‌های یادگیری ماشین و داده‌های با حجم عظیم اجرا می‌شود، به نحوی که نقاطی که به هم نزدیک‌تر هستند از نظر معنی نیز مشابه باشند. برای دستیابی به این هدف، تمام واژگانِ یک زبان در فضایی چندصد-بُعدی قرار می‌گیرند که برای انسان قابل‌تصور نیست. اما با استفاده از الگوریتم‌های ریاضیاتی می‌توان این نقاط را در فضای دو یا سه‌بُعدی نیز قرار داد، که البته به مدل‌سازی ضعیف‌تر می‌انجامد.
      </Typography>
      <GameFram src={'https://word2vec.darkube.app/'} />
    </Stack>,
  nextStep: 'Step3',
})

const Step3 = new Step({
  id: "Step3",
  parent: Step2,
  x: 1200,
  y: 0,
  scale: 1,
  children:
    <Stack position={'static'} alignItems={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h5" alignSelf={'end'} gutterBottom>
        قرابت معنایی
      </Typography>
      <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={8}>
        Cluster Property
      </Typography>
      <Typography>
        الگوریتم‌های دگرنمایی واژگان به شکلی تعبیه می‌شوند که واژگانِ با معنای مشابه به طور خودکار در کنار یکدیگر قرار گیرند. برای مثال همان طور که در نمودار مقابل مشاهده می‌کنید نام‌های روزهای هفته، نام‌های شهرها و نام‌های کشورها و حتی اسامی مردانه و زنانه هر کدام شبیه یک خوشه در کنار یکدیگر قرار گرفته اند.
      </Typography>
      <GameFram src={'https://word2vec.darkube.app/?show_colors=true/'} />
    </Stack>,
  nextStep: 'Step4',
})

const Step4 = new Step({
  id: "Step4",
  parent: Step3,
  x: 1200,
  y: 0,
  scale: 1,
  children:
    <Stack position={'static'} alignItems={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h5" alignSelf={'end'} gutterBottom>
        روابط میان جفت کلمات
      </Typography>
      <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={8}>
        Vector Property
      </Typography>
      <Typography>
        یکی دیگر از ویژگی‌هایی که در دگرنمایی واژگان حفظ می‌شود، روابط معنایی بین زوج کلمات است. در واقع انتظار داریم همان بُرداری که فرانسه را به پایتخت آن یعنی پاریس متصل می‌کند، آلمان را نیز به پایتخت‌اش یعنی برلین متصل کند.
      </Typography>
      <GameFram src={'https://word2vec.darkube.app/?show_colors=true&show_relations=true/'} />
    </Stack>,
  nextStep: 'Step5',
})

const Step5 = new Step({
  id: "Step5",
  parent: Step4,
  x: 1200,
  y: 0,
  scale: 1,
  children:
    <Stack position={'static'} alignItems={'center'} width={'100%'} height={'100%'}>
      <Typography variant="h5" alignSelf={'end'} gutterBottom>
        کلمه خودتان را به نمودار کلمات اضافه کنید
      </Typography>
      <Typography variant="h5" alignSelf={'end'} gutterBottom marginBottom={8}>
        Add your own word to the word chart
      </Typography>
      <Typography>
        در بخش‌های پیشین، با دگرنمایی واژگان و ویژگی‌های جالب آن آشنا شدید. در این بخش می‌توانید کلمات دلخواه خود را وارد کرده و نقطه‌ی مربوط به آنها را بر روی نمودار مشاهده کنید.
      </Typography>
      <GameFram src={'https://word2vec.darkube.app/?add_words=true&show_colors=true/'} />
    </Stack>,
  nextStep: 'Step1',
})

export default [
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
];
