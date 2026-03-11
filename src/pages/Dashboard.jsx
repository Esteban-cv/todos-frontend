import { BiCheckCircle, BiTime, BiListUl, BiTrendingUp, BiPlusCircle, BiRocket } from 'react-icons/bi';

function Dashboard() {

    const stats = [
        {
            icon: BiListUl,
            label: 'Total Tareas',
            value: '12',
            color: 'var(--hl-primary)',
            bg: 'var(--hl-primary-light)',
        },
        {
            icon: BiCheckCircle,
            label: 'Completadas',
            value: '8',
            color: '#10B981',
            bg: '#ECFDF5',
        },
        {
            icon: BiTime,
            label: 'Pendientes',
            value: '4',
            color: '#F59E0B',
            bg: '#FFFBEB',
        },
        {
            icon: BiTrendingUp,
            label: 'Productividad',
            value: '67%',
            color: '#8B5CF6',
            bg: '#F5F3FF',
        },
    ];

    return (
        <div className="container-fluid px-0">
            {/* Header de bienvenida */}
            <div className="mb-4">
                <h2 id='success-message' className="fw-bold mb-1" style={{ color: 'var(--hl-text)' }}>
                    Buenos días! <span className="ms-1">👋</span>
                </h2>
                <p className="mb-0" style={{ color: 'var(--hl-muted)' }}>
                    Aquí tienes un resumen de tus tareas de hoy.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="row g-3 mb-4">
                {stats.map((stat, i) => (
                    <div className="col-6 col-lg-3" key={i}>
                        <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 'var(--hl-radius)' }}>
                            <div className="card-body d-flex align-items-center gap-3 p-3">
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                                    style={{ width: '48px', height: '48px', backgroundColor: stat.bg }}
                                >
                                    <stat.icon size={24} style={{ color: stat.color }} />
                                </div>
                                <div>
                                    <div className="fw-bold fs-4 lh-1 mb-1" style={{ color: 'var(--hl-text)' }}>
                                        {stat.value}
                                    </div>
                                    <div className="small" style={{ color: 'var(--hl-muted)' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-3">
                {/* Acciones rápidas */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: 'var(--hl-radius)' }}>
                        <div className="card-body p-4">
                            <h5 className="fw-semibold mb-3" style={{ color: 'var(--hl-text)' }}>Tareas Recientes</h5>
                            
                            <div className="d-flex flex-column gap-2">
                                {['Diseñar mockups del proyecto', 'Revisar pull requests', 'Preparar presentación'].map((task, i) => (
                                    <div
                                        key={i}
                                        className="d-flex align-items-center gap-3 p-3 rounded-3 border"
                                        style={{ borderColor: 'var(--hl-border)', transition: 'all 0.15s' }}
                                    >
                                        <div
                                            className="rounded-circle border d-flex align-items-center justify-content-center flex-shrink-0"
                                            style={{ width: '22px', height: '22px', borderColor: 'var(--hl-border)', cursor: 'pointer' }}
                                        />
                                        <span className="flex-grow-1" style={{ color: 'var(--hl-text)' }}>{task}</span>
                                        <span className="badge rounded-pill" style={{ backgroundColor: 'var(--hl-primary-light)', color: 'var(--hl-primary)', fontSize: '0.75rem' }}>
                                            {i === 0 ? 'Hoy' : i === 1 ? 'Mañana' : 'Esta semana'}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className="btn btn-hl mt-3 px-4">
                                <BiPlusCircle className="me-2" />
                                Agregar Tarea
                            </button>
                        </div>
                    </div>
                </div>

                {/* Panel lateral */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: 'var(--hl-radius)' }}>
                        <div className="card-body p-4">
                            <h5 className="fw-semibold mb-3" style={{ color: 'var(--hl-text)' }}>Inicio Rápido</h5>
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex align-items-start gap-3">
                                    <div className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                                        style={{ width: '40px', height: '40px', backgroundColor: '#EEF2FF' }}>
                                        <BiPlusCircle size={20} style={{ color: 'var(--hl-primary)' }} />
                                    </div>
                                    <div>
                                        <div className="fw-medium small" style={{ color: 'var(--hl-text)' }}>Crear nueva tarea</div>
                                        <div className="small" style={{ color: 'var(--hl-muted)' }}>Agrega y organiza tus pendientes</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start gap-3">
                                    <div className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                                        style={{ width: '40px', height: '40px', backgroundColor: '#ECFDF5' }}>
                                        <BiRocket size={20} style={{ color: '#10B981' }} />
                                    </div>
                                    <div>
                                        <div className="fw-medium small" style={{ color: 'var(--hl-text)' }}>Revisar progreso</div>
                                        <div className="small" style={{ color: 'var(--hl-muted)' }}>Mira cómo vas esta semana</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mini motivación */}
                    <div
                        className="card border-0 mt-3 text-white"
                        style={{
                            borderRadius: 'var(--hl-radius)',
                            background: 'linear-gradient(135deg, var(--hl-primary) 0%, #7C3AED 100%)',
                        }}
                    >
                        <div className="card-body p-4 text-center">
                            <div className="display-6 mb-2">🚀</div>
                            <h6 className="fw-semibold mb-1">¡Sigue así!</h6>
                            <p className="small mb-0 opacity-75">Llevas 8 tareas completadas esta semana</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard