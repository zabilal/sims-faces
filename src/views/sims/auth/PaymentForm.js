// material-ui
import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';

// ==============================|| FORM WIZARD - BASIC  ||============================== //

export default function PaymentForm() {
    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                Admin Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField type="email" required id="" label="Email" fullWidth autoComplete="Email" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="" label="Phone" fullWidth autoComplete="Phone" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="" label="Admin Name" fullWidth autoComplete="Admin Name" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id=""
                        label="UserName"
                        // helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="UserName"
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        id=""
                        type="password"
                        label="password"
                        // helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="4995***"
                    />
                </Grid>
            </Grid>
        </>
    );
}
