export interface LocaleInfoInterface { 
    name: string // понятное имя локали, например, USA
    locale: string // код локали, например, en-US
    flag: string // код локали из двух символов для имени иконки
    selected: boolean // флаг, указывающий что данная локаль в данный момент используется
}