import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Content = ({ title, text }) => (
    <>
        <Typography variant="caption" display="block" color='secondary'>{title}</Typography>
        <Typography variant="body2" display="block" gutterBottom>{text}</Typography>
    </>
)

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
            <>
                <Content title={'Task'} text={task} />
                <Content title={'Outcome'} text={objective} />
            </>
        );
    }
}
