function select(name: string): string {
    const userIndex: {[key: string]: string} = {
        'okayu': 'okayu',
        'korone': 'korone',
        'pekora': 'pekora'
    }

    const trueName = userIndex[name]
    if(trueName === undefined) {
        return ''
    }
    return trueName
}

export function generate(names: string[]): string{
    if(names.length > 0){
        const nameString = names.map(element => {
            return select(element)
        }).join('&')

        return `http://api.~~/?${nameString}`
    }

    return ''
}
