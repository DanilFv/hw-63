import {Box, Card, CardContent, Typography} from '@mui/material';


const ContactsInfo = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                mt: 6
            }}
        >
            <Card>
                <CardContent sx={{ height: '100%' }}>
                    <Typography variant="h3" component="h3" color="inherit" sx={{ mb: 2, fontWeight: 600 }}>
                        Our contacts
                    </Typography>
                    <Typography variant="h6" component="p" color="inherit" fontWeight={600}>
                        +996 (777) 777-777
                    </Typography>
                    <Typography variant="h6" component="p" color="inherit" fontWeight={600} sx={{ mb: 3 }} >
                        +996 (888) 888-888
                    </Typography>
                    <Box>
                        <Typography variant="body1" component="p" color="inherit">
                            Подпишитесь на нашу рассылку, чтобы следить за нашими обновлениями!
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ContactsInfo;