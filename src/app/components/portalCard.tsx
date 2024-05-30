"use client";

import { Button } from "@nextui-org/button";
import { NextUIProvider } from "@nextui-org/react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import Link from "next/link";

interface iPortalCard {
  btnText: string
  href: string
}

// Composant Card
export default function CustomCard(props: iPortalCard) {
    return (
        <NextUIProvider className="w-96">
            <Card className="m-4">
              <CardBody>
                <Button as={Link} href={props.href}>
                  <p>{props.btnText}</p>
                </Button>
              </CardBody>
            </Card>
        </NextUIProvider>
    );
}