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
        'Strategic Leadership and Business Direction',
        'Brand and Market Position',
        'Knowledge Management and Business Intelligence',
        'Stakeholder Engagement and Relationship Management',
        'Resource Efficiency and Skills Deployment',
        'Financial Planning and Controls'
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
