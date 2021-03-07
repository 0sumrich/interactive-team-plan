import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const pillarFullName = team => {
    if (!team) {
        return team
    }
    if (!team.includes('Pillar')) {
        return team
    }
    const pillars = [
        'Operations',
        'Strategic leadership',
        'Marketing',
        'Knowledge management and business intelligence',
        'Engagement',
        'Financial planning and control',
        'Pillar 6'
    ]
    const idx = Number(team.replace('Pillar ', ''))
    return `${team}: ${pillars[idx]}`
}

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
                <Typography variant='caption' component='div' color='primary'>
                    <Box fontStyle='italic'>{pillarFullName(team)}</Box>
                </Typography>
            </>
        );
    }
}
