import React, { useState } from 'react'
import './index.css'
import { Page, IndexTable, Card, Text, Badge, EmptySearchResult, Icon, Pagination } from '@shopify/polaris';
import {
    EditMajor, DeleteMajor
} from '@shopify/polaris-icons';

export default function TableListPixel() {
    const [page, setPage] = useState(1);
    const totalPage = 2;
    const [orders, setOrders] = useState([
        {
            id: '1022',
            order: '#1022',
            pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
            status: 'Jaydon Stanton',
            conversionApi: false,
            pages: 'specific',

        },
        {
            id: '1021',
            order: '#1021',
            pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
            status: 'Jaydon Stanton',
            conversionApi: false,
            pages: 'all page',

        },
        {
            id: '1020',
            order: '#1020',
            pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
            status: 'Jaydon Stanton',
            conversionApi: true,
            pages: 'all page',

        },
        {
            id: '1019',
            order: '#1019',
            pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e01',
            status: 'Ruben Westerfelt',
            conversionApi: false,
            pages: "all page",

        },
        {
            id: '1018',
            order: '#1018',
            pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
            status: 'Leo Carder',
            conversionApi: true,
            pages: "specific",

        },
    ]
    )

    const resourceName = {
        singular: 'order',
        plural: 'orders',
    };

    const emptyStateMarkup = (
        <EmptySearchResult
            title={'No statuss yet'}
            description={'Try changing the filters or search term'}
            withIllustration
        />
    );

    const previousListPixel = () => {
        setOrders([
            {
                id: '1022',
                order: '#1022',
                pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
                status: 'Jaydon Stanton',
                conversionApi: false,
                pages: 'specific',

            },
            {
                id: '1021',
                order: '#1021',
                pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
                status: 'Jaydon Stanton',
                conversionApi: false,
                pages: 'all page',

            },
            {
                id: '1020',
                order: '#1020',
                pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
                status: 'Jaydon Stanton',
                conversionApi: true,
                pages: 'all page',

            },
            {
                id: '1019',
                order: '#1019',
                pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e01',
                status: 'Ruben Westerfelt',
                conversionApi: false,
                pages: "all page",

            },
            {
                id: '1018',
                order: '#1018',
                pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
                status: 'Leo Carder',
                conversionApi: true,
                pages: "specific",

            }
        ])
    }

    const nextListPixel = () => {
        setOrders([
            {
                id: '1020',
                order: '#1020',
                pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e01',
                status: 'Ruben Westerfelt',
                conversionApi: false,
                pages: "all page",

            },
            {
                id: '1019',
                order: '#1019',
                pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
                status: 'Leo Carder',
                conversionApi: true,
                pages: "specific",

            },
            {
                id: '1018',
                order: '#1018',
                pixelTitle: '743bf92d-5aa1-496b-b919-a244bd5d0e23',
                status: 'Leo Carder',
                conversionApi: true,
                pages: "specific",

            }
        ])
    }

    const rowMarkup = orders.map(
        (
            { id, order, pixelTitle, status, conversionApi, pages, },
            index,
        ) => (
            <IndexTable.Row id={id} key={id} position={index}>
                <IndexTable.Cell>
                    <Text variant="bodyMd" fontWeight="bold" as="span">
                        {order}
                    </Text>
                </IndexTable.Cell>
                <IndexTable.Cell>{pixelTitle}</IndexTable.Cell>
                <IndexTable.Cell>
                    {
                        status == "Jaydon Stanton"
                            ? <Badge progress="complete" tone="success">Enabled</Badge>
                            : <Badge progress="incomplete" tone="attention">Disabled</Badge>
                    }
                </IndexTable.Cell>
                <IndexTable.Cell>
                    {
                        conversionApi
                            ? <Badge progress="complete" tone="success">Enabled</Badge>
                            : <Badge progress="incomplete" tone="attention">Disabled</Badge>
                    }
                </IndexTable.Cell>
                <IndexTable.Cell>
                    {
                        pages == "all page"
                            ? <Badge progress="complete" tone="success">All Page</Badge>
                            : <Badge progress="partiallyComplete" tone="attention">Specific</Badge>
                    }
                </IndexTable.Cell>
                <IndexTable.Cell>
                    <div className='action_table_group'>
                        <Icon source={EditMajor} tone="base" />
                        <Icon source={DeleteMajor} tone="base" />
                    </div>
                </IndexTable.Cell>
            </IndexTable.Row>
        ),
    );

   

    console.log("order: ", orders);

    return (
        <Page fullWidth>
            <Card>
                <IndexTable
                    resourceName={resourceName}
                    itemCount={orders.length}
                    headings={[
                        { title: 'Pixel ID' },
                        { title: 'Pixel title' },
                        { title: 'Status' },
                        { title: 'Convesion API' },
                        { title: 'Pages' },
                        { title: 'Action' },
                    ]}
                    selectable={false}
                    emptyState={emptyStateMarkup}
                >
                    {rowMarkup}
                </IndexTable>
                <div className='pagination'>
                    <Pagination
                        label={page}
                        hasPrevious
                        onPrevious={() => {
                            page > 1 && setPage(page - 1);
                            previousListPixel();
                        }}
                        hasNext
                        onNext={() => {
                            page < totalPage && setPage(page + 1);
                            nextListPixel();
                        }}
                    />

                </div>
            </Card>
        </Page>
    )
}
