import React from 'react';
import {Box, Button, Grid} from "@material-ui/core";
import {useRouter} from "next/router";

function ArticlesComponent() {

    const router = useRouter();

    return (
        <Grid container justify="center">
            <Box mt={3} width={1} textAlign="center" p={1}>
                main page content
            </Box>
            <Box bgcolor="red" color="white" fontWeight={700} p={5}>
                yellow blue bus
            </Box>
            <Box mt={4} width={1} textAlign="center">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push("/")}
                >
                    {" "}
                    go home
                </Button>
            </Box>
        </Grid>
    );
}

export default ArticlesComponent;
