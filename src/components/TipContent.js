import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export function TipContent({ hoverData }) {
    const { objective, team, task } = hoverData;
    if (team.length === 0) {
        return (
            <Typography variant='caption' component='div'>
                <Box fontWeight='fontWeightBold'>{objective}</Box>
            </Typography>
        );
    }
    else {
        return (
            <Typography variant='caption' component='div'>
                <Box fontWeight='fontWeightBold'>{task}</Box>
                <Box>{team}</Box>
                <Box>{objective}</Box>
            </Typography>
        );
    }
}
