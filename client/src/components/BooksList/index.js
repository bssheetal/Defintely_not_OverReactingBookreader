import React from "react";
import { Grid, Container, Row, Col } from "../components/Grid";

export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function RecipeListItem({

}) {
    return (
        <Container>
            <Grid>
                <Row>
                    <Col size="xs-4 sm-2">

                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <h5>{authors}</h5>
                        <p>{Description}</p>
                        <a rel="noreferrer noopener" target="_blank" href={href}>
                            Go to books!
            </a>
                    </Col>
                </Row>
            </Grid>
        </Container>
    );
}