import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const FeaturePaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    textAlign: "center",
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)"
    }
}));