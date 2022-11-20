// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Checkbox, FormControlLabel, Grid, Typography, TextField, useMediaQuery } from '@mui/material';
import { Checkbox, FormControlLabel, Grid, Typography, TextField } from '@mui/material';

// ==============================|| FORM WIZARD - BASIC  ||============================== //

export default function AddressForm() {
    // const theme = useTheme();
    // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                School Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <TextField required id="" name="firstName" label="School Name" fullWidth autoComplete="given-name" />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <TextField required id="" name="lastName" label="School Address:" fullWidth autoComplete="family-name" />
                </Grid>
                <Typography variant="h5" gutterBottom sx={{ mb: 2, mt: 2, ml: 2 }}>
                    NB: If each of the school section has different names, check the box and specify the name in the fields below:
                </Typography>
                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox color="secondary" name="Preprimary" value="yes" />} label="Preprimary" />
                    <TextField required id="" name="sectionA" label="Section Name" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox color="secondary" name="Primary" value="yes" />} label="Primary" />
                    <TextField id="" name="sectionB" label="Section Name" fullWidth autoComplete="Section Name" />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel control={<Checkbox color="secondary" name="Secondary" value="yes" />} label="Secondary" />
                    <TextField id="" name="sectionC" label="Section name" fullWidth autoComplete="Section Name" />
                </Grid>
            </Grid>
        </>
    );
}
