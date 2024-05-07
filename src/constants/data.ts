import iphoneXR from '@/assets/images/Apple iPhone Xr.png';
import iphone12 from '@/assets/images/Apple iPhone 12.png';
import galaxyA72 from '@/assets/images/Samsung Galaxy A72.png';
import galaxyS21 from '@/assets/images/Samsung Galaxy S21.png';
import xiaomiMi11 from '@/assets/images/Xiaomi Mi 11 Lite.png';
import realme8 from '@/assets/images/Realme 8 Pro.png';


export type Property = {
    name: String,
    value: boolean | String | Number
}

export type PhoneCharacteristics = {
    id: number,
    model: String,
    image: String,
    properties: Property[]
}

export const phones: PhoneCharacteristics[] = [
    {
        id: 1,
        model: 'Apple iPhone 12',
        image: iphone12,
        properties: [
            {
                name: "Производитель",
                value: 'Apple',
            },
            {
                name: "Год релиза",
                value: 2020,
            },
            {
                name: "Диагональ экрана (дюйм)",
                value: 6.1,
            },
            {
                name: "Страна-производитель",
                value: 'Китай',
            }, {
                name: "Объем памяти",
                value: '128 Гб',
            },
            {
                name: "Частота обновления экрана",
                value: '60 Гц',
            },
            {
                name: "NFC",
                value: false,
            },
            {
                name: "Поддержка eSIM",
                value: true,
            },
            {
                name: "Поддержка беспроводной зарядки",
                value: true,
            },
            {
                name: "Стоимость",
                value: '81.999 ₽',
            }
        ]
    },
    {
        id: 2,
        model: 'Xiaomi Mi 11 Lite',
        image: xiaomiMi11,
        properties: [
            {
                name: "Производитель",
                value: 'Xiaomi',
            },
            {
                name: "Год релиза",
                value: 2021,
            },
            {
                name: "Диагональ экрана (дюйм)",
                value: 6.55,
            },
            {
                name: "Страна-производитель",
                value: 'Китай',
            }, {
                name: "Объем памяти",
                value: '128 Гб',
            },
            {
                name: "Частота обновления экрана",
                value: '90 Гц',
            },
            {
                name: "NFC",
                value: true,
            },
            {
                name: "Поддержка eSIM",
                value: true,
            },
            {
                name: "Поддержка беспроводной зарядки",
                value: false,
            },
            {
                name: "Стоимость",
                value: '27.499 ₽',
            }
        ]
    },
    {
        id: 3,
        model: 'Samsung Galaxy A72',
        image: galaxyA72,
        properties: [
            {
                name: "Производитель",
                value: 'Samsung',
            },
            {
                name: "Год релиза",
                value: 2021,
            },
            {
                name: "Диагональ экрана (дюйм)",
                value: 6.7,
            },
            {
                name: "Страна-производитель",
                value: 'Вьетнам',
            }, {
                name: "Объем памяти",
                value: '128 Гб',
            },
            {
                name: "Частота обновления экрана",
                value: '90 Гц',
            },
            {
                name: "NFC",
                value: true,
            },
            {
                name: "Поддержка eSIM",
                value: false,
            },
            {
                name: "Поддержка беспроводной зарядки",
                value: true,
            },
            {
                name: "Стоимость",
                value: '32.899 ₽',
            }
        ]
    },
    {
        id: 4,
        model: 'Samsung Galaxy S21',
        image: galaxyS21,
        properties: [
            {
                name: "Производитель",
                value: 'Samsung',
            },
            {
                name: "Год релиза",
                value: 2021,
            },
            {
                name: "Диагональ экрана (дюйм)",
                value: 6.4,
            },
            {
                name: "Страна-производитель",
                value: 'Индия',
            }, {
                name: "Объем памяти",
                value: '128 Гб',
            },
            {
                name: "Частота обновления экрана",
                value: '120 Гц',
            },
            {
                name: "NFC",
                value: true,
            },
            {
                name: "Поддержка eSIM",
                value: false,
            },
            {
                name: "Поддержка беспроводной зарядки",
                value: false,
            },
            {
                name: "Стоимость",
                value: '49.999 ₽',
            }
        ]
    },
    {
        id: 5,
        model: 'Apple iPhone Xr',
        image: iphoneXR,
        properties: [
            {
                name: "Производитель",
                value: 'Apple',
            },
            {
                name: "Год релиза",
                value: 2021,
            },
            {
                name: "Диагональ экрана (дюйм)",
                value: 6.1,
            },
            {
                name: "Страна-производитель",
                value: 'Китай',
            }, {
                name: "Объем памяти",
                value: '128 Гб',
            },
            {
                name: "Частота обновления экрана",
                value: '60 Гц',
            },
            {
                name: "NFC",
                value: true,
            },
            {
                name: "Поддержка eSIM",
                value: true,
            },
            {
                name: "Поддержка беспроводной зарядки",
                value: true,
            },
            {
                name: "Стоимость",
                value: '52.299 ₽',
            }
        ]
    },
    {
        id: 6,
        model: 'Realme 8 Pro',
        image: realme8,
        properties: [
            {
                name: "Производитель",
                value: 'Realme',
            },
            {
                name: "Год релиза",
                value: 2021,
            },
            {
                name: "Диагональ экрана (дюйм)",
                value: 6.4,
            },
            {
                name: "Страна-производитель",
                value: 'Китай',
            }, {
                name: "Объем памяти",
                value: '128 Гб',
            },
            {
                name: "Частота обновления экрана",
                value: '60 Гц',
            },
            {
                name: "NFC",
                value: true,
            },
            {
                name: "Поддержка eSIM",
                value: false,
            },
            {
                name: "Поддержка беспроводной зарядки",
                value: false,
            },
            {
                name: "Стоимость",
                value: '32.999 ₽',
            }
        ]
    }
]