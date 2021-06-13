export interface ConfigApp {
    name: string | any;
    prefix: string | any;
}

export interface ConfigTheme {
    colors: {
        [key: string]: string
    }
}