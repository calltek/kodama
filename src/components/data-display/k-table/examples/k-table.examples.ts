import { KTableColumn } from '../k-table.types'

export const exampleColumns: KTableColumn[] = [
    {
        title: 'ID',
        index: 'id',
        order: true,
        search: true,
        align: 'left',
        width: '100px',
        filter: {
            type: 'number'
        }
    },
    {
        title: 'Fecha',
        index: 'date',
        order: true,
        search: false,
        align: 'left',
        filter: {
            type: 'date',
            min: '2020-01-01',
            max: '2050-01-01'
        },
        makeup: 'date'
    },
    {
        title: 'Cliente',
        index: 'client_name',
        order: false,
        search: true,
        align: 'left',
        slot: 'client',
        filter: {
            type: 'text'
        }
    },
    {
        title: 'Teléfono',
        index: 'client_phone',
        order: false,
        search: true,
        align: 'left'
    },
    {
        title: 'Transportista',
        index: 'carrier',
        order: true,
        search: false,
        align: 'left',
        filter: {
            type: 'select',
            options: [
                {
                    title: 'Envío a domicilio',
                    value: 0,
                    icon: 'far fa-truck-fast'
                },
                {
                    title: 'Envío a centro',
                    value: 1,
                    icon: 'far fa-building-flag'
                }
            ]
        }
    },
    {
        title: 'Estado',
        index: 'status',
        order: true,
        search: false,
        align: 'center',
        filter: {
            type: 'select',
            options: [
                {
                    title: 'Pagado',
                    value: 0
                },
                {
                    title: 'No pagado',
                    value: 1
                }
            ]
        }
    },
    {
        title: 'Importe',
        index: 'price',
        order: true,
        search: false,
        align: 'right',
        filter: { type: 'range', min: 0, max: 40 },
        makeup: 'price'
    }
]

export const exampleData = [
    {
        id: 1,
        date: '2022-05-22 05:46:42',
        client_name: 'Benedicte Vanden Berghe',
        client_phone: '666 123 000',
        carrier: 0,
        status: 1,
        price: 18.9
    },
    {
        id: 2,
        date: '2022-06-22 01:46:42',
        client_name: 'Jhon Doe',
        client_phone: '666 123 000',
        carrier: 0,
        status: 1,
        price: 38.9
    },
    {
        id: 3,
        date: '2022-07-22 02:46:42',
        client_name: 'Ava Din Yang',
        client_phone: '666 123 000',
        carrier: 1,
        status: 0,
        price: 28.9
    },
    {
        id: 4,
        date: '2022-08-21 03:46:42',
        client_name: 'Jeremiah Lacalle',
        client_phone: '666 123 000',
        carrier: 0,
        status: 0,
        price: 38.9
    },
    {
        id: 5,
        date: '2022-09-22 09:46:42',
        client_name: 'Pedro Morate',
        client_phone: '666 123 000',
        carrier: 1,
        status: 1,
        price: 88.9
    }
]
