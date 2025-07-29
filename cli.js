import { createInterface } from 'readline';

async function getBMI(peso, altura) {
    try {
        const response = await fetch(`https://bmicalculatorapi.vercel.app/api/bmi/${peso}/${altura}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error fetching BMI data:', err);
    }
}

const infos = createInterface({
    input: process.stdin,
    output: process.stdout
});

infos.question('Digite seu peso (kg): ', (peso) => {
    infos.question('Digite sua altura (m): ', (altura) => {
        getBMI(peso, altura).then(result => {
            console.log(result);
            infos.close();
        });
    });
});


