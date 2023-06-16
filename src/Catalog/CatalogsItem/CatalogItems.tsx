import {Card, Image, Text, Title} from '@mantine/core';
import React from 'react';

const CatalogItems = (props: any) => {
    return  (
        <Card
            shadow="sm"
            padding="xl"
            component="a"
        >
            <Card.Section>
                <Image
                    src={props.img}
                    height={400}
                    alt="No way!"
                />
            </Card.Section>

            <Title weight={500} size="lg" mt="md">
                {props.title}
            </Title>

            <Text mt="xs" color="dimmed" size="sm">
                {props.price} BYN
            </Text>
        </Card>
    );
};

export default CatalogItems;