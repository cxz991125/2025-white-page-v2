let config = './'

if (process.env.NODE_ENV === 'production') {  
    config = 'https://mat1.gtimg.com/qqcdn/whitepaper/2025/'
}

export const configUrl = config