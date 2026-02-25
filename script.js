// ==========================================
// CONFIGURAÇÕES E CONSTANTES
// ==========================================
const STORAGE_KEY = 'docz_mirrors_v10';

const MirrorType = {
    CAIXA: 'caixa',
    DOCUMENTO: 'documento',
    DOCUMENTO_CODIGO: 'documento_codigo',
    AVULSO: 'avulso',
};

const headerLinesByModel = {
    'Modelo Código Único': 1,
    'Modelo CADE': 1,
    'Modelo MTE': 1,
    'Modelo HOME ASSISTENCE': 1,
    'Modelo HMAB': 2,
    'Modelo Diretoria': 3,
    'Modelo Novacap': 3,
    'Modelo GRUPO EQUATORIAL ENERGIA': 5,
    'Modelo IGES': 6
};

// ==========================================
// CONFIGURAÇÕES DE CAMPO
// ==========================================

const defaultFieldConfig = {
    showLabel: true,           // Exibir nome do campo
    usePipe: true,             // Separador por pipe
    uppercase: false,          // Caixa alta
    bold: false,               // Negrito
    alignment: 'left',          // left, center, right
    // Campos específicos para Classificação
    classificationMode: 'both', // 'code', 'subject', 'both'
    classificationSeparator: 'pipe', // 'pipe', 'comma', 'semicolon'
    // Campos específicos para Ano
    yearMode: 'both', // 'initial', 'final', 'both'
    yearSeparator: ' - ', // Separador entre anos
    // Forçar classificação
    forceClassification: false
};

// Cache para configurações por modelo
let modelFieldConfigs = {};

// Constantes para tipos de campo
const FieldType = {
    CLASSIFICATION: 'classification', // Campo de classificação (código + assunto)
    YEAR: 'year',                     // Campo de ano (inicial/final)
    TEXT: 'text'                      // Campo de texto normal
};

// Mapeamento de campos por tipo
const fieldTypeMap = {
    // Classificação (campos que podem ter código + assunto)
    'top_value': FieldType.CLASSIFICATION,
    'title_value': FieldType.CLASSIFICATION,
    'extra_value': FieldType.CLASSIFICATION,
    'line4_value': FieldType.CLASSIFICATION,
    'line5_value': FieldType.CLASSIFICATION,
    'line6_value': FieldType.CLASSIFICATION,
    
    // Campos de ano
    'data_1_value': FieldType.YEAR,
    'data_2_value': FieldType.YEAR,
    
    // Demais campos são texto normal
    'main_text': FieldType.TEXT,
    'interm_value': FieldType.TEXT,
    'dest_value': FieldType.TEXT,
    'barcode_value': FieldType.TEXT
};

// ==========================================
// OPÇÕES DE CABEÇALHO ATUALIZADAS
// ==========================================

const headerLabelOptionsByModel = {
    'Modelo Código Único': {
        top: ['CLASSIFICAÇÃO - C12']
    },
    'Modelo CADE': {
        top: ['CLASSIFICAÇÃO - C12']
    },
    'Modelo MTE': {
        top: ['CLASSIFICAÇÃO - C12']
    },
    'Modelo HMAB': {
        top: ['CLASSIFICAÇÃO - C12'],
        title: ['CLASSIFICAÇÃO - C12']
    },
    'Modelo Diretoria': {
        top: ['CLASSIFICAÇÃO - C12'],
        title: ['CLASSIFICAÇÃO - C12'],
        extra: ['CLASSIFICAÇÃO - C12']
    },
    'Modelo Novacap': {
        top: ['CLASSIFICAÇÃO - C12'],
        title: ['CLASSIFICAÇÃO - C12'],
        extra: ['CLASSIFICAÇÃO - C12']
    },
    'Modelo IGES': {
        top: ['UNIDADE', 'CLASSIFICAÇÃO - C12'],
        title: ['Nº CAIXA', 'CLASSIFICAÇÃO - C12'],
        extra: ['DEPARTAMENTO', 'CLASSIFICAÇÃO - C12'],
        line4: ['TIPO DOCUMENTAL', 'CLASSIFICAÇÃO - C12'],
        line5: ['CÓDIGO', 'CLASSIFICAÇÃO - C12'],
        line6: ['PACIENTE', 'CLASSIFICAÇÃO - C12'],
    },
    'Modelo HOME ASSISTENCE': {
        top: ['CLASSIFICAÇÃO - C12']
    },
    'Modelo GRUPO EQUATORIAL ENERGIA': {
        top: ['CLASSIFICAÇÃO - C12'],
        title: ['CLASSIFICAÇÃO - C12'],
        extra: ['CLASSIFICAÇÃO - C12'],
        line4: ['CLASSIFICAÇÃO - C12'],
        line5: ['CLASSIFICAÇÃO - C12']
    }
};

// ==========================================
// CONFIGURAÇÕES DOS MODELOS
// ==========================================

const defaultMirrorConfig = {
    id: '',
    name: '',
    type: MirrorType.CAIXA,
    includeLogo: true,
    logoImage: null,
    logoSize: 2,
    customValues: {
        'top_label': 'SETOR',
        'top_value': '',
        'title_label': 'TÍTULO',
        'title_value': '',
        'extra_label': '',
        'extra_value': '',
        'line4_label': '',
        'line4_value': '',
        'line5_label': '',
        'line5_value': '',
        'main_text': '',
        'data_1_label': 'ANO PRODUÇÃO',
        'data_1_value': '',
        'data_2_label': 'ANO DESTINAÇÃO',
        'data_2_value': '',
        'interm_label': 'INTERMEDIÁRIO',
        'interm_value': '',
        'dest_label': 'DESTINAÇÃO FINAL',
        'dest_value': '',
        'barcode_label': 'CÓDIGO DE BARRAS',
        'barcode_value': ''
    },
    layoutOption: 2
};

const igesMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO,
    name: 'Modelo IGES',
    includeLogo: true,
    logoImage: './logo9.png',
    customValues: {
        top_label: 'UNIDADE',
        top_value: '',
        title_label: 'Nº CAIXA',
        title_value: '',
        extra_label: 'DEPARTAMENTO',
        extra_value: '',
        line4_label: 'TIPO DOCUMENTAL',
        line4_value: '',
        main_text: 'PACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE\nPACIENTE'
    }
};

const codigoUnicoMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo Código Único',
    includeLogo: true,
    logoImage: './logo1.png',
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const diretoriaMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_DIRETORIA,
    name: 'Modelo Diretoria',
    includeLogo: true,
    logoImage: './logo2.png',
    customValues: {
        top_label: 'DIRETORIA / ORGÃO',
        top_value: '',
        title_label: 'CÓDIGO',
        title_value: '',
        extra_label: 'CÓDIGO',
        extra_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const novacapMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo Novacap',
    includeLogo: true,
    logoImage: './logo3.png',
    customValues: {
        top_label: 'DEPARTAMENTO',
        top_value: '',
        title_label: 'CÓDIGO',
        title_value: '',
        extra_label: 'CÓDIGO',
        extra_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const mteMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo MTE',
    includeLogo: true,
    logoImage: './logo4.png',
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const cadeMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo CADE',
    includeLogo: true,
    logoImage: './logo5.png',
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const hmabMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo HMAB',
    includeLogo: true,
    logoImage: './logo6.png',
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: 'CÓDIGO',
        title_value: '',
        extra_label: '',
        extra_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const homeAssistenceMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO,
    name: 'Modelo HOME ASSISTENCE',
    includeLogo: true,
    logoImage: './logo7.png',
    customValues: {
        top_label: 'CONVÊNIO',
        top_value: '',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: '',
        data_1_value: '',
        data_2_label: '',
        data_2_value: '',
        interm_label: '',
        interm_value: '',
        dest_label: '',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

const equatorialEnergiaMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo GRUPO EQUATORIAL ENERGIA',
    includeLogo: true,
    logoImage: './logo8.png',
    customValues: {
        top_label: 'CÓDIGO',
        top_value: '',
        title_label: 'CÓDIGO',
        title_value: '',
        extra_label: 'CÓDIGO',
        extra_value: '',
        line4_label: 'CÓDIGO',
        line4_value: '',
        line5_label: 'CÓDIGO',
        line5_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_label: 'CÓDIGO DE BARRAS',
        barcode_value: ''
    }
};

// Opções dos dropdowns
const labelOptions = [
    { value: 'SETOR', label: 'Setor' },
    { value: 'DEPARTAMENTO', label: 'Departamento' },
    { value: 'UNIDADE', label: 'Unidade' },
    { value: 'CLIENTE', label: 'Cliente' },
    { value: 'EMPRESA', label: 'Empresa' }
];

const titleOptions = [
    { value: 'TÍTULO', label: 'Título' },
    { value: 'ASSUNTO', label: 'Assunto' },
    { value: 'CLASSE', label: 'Classe Documental' },
    { value: 'PROJETO', label: 'Projeto' }
];

const data1Options = [
    { value: 'ANO PRODUÇÃO', label: 'Ano Produção' },
    { value: 'DATA INICIAL', label: 'Data Inicial' },
    { value: 'VIGÊNCIA', label: 'Vigência' }
];

const data2Options = [
    { value: 'ANO DESTINAÇÃO', label: 'Ano Destinação' },
    { value: 'DATA FINAL', label: 'Data Final' },
    { value: 'VALIDADE', label: 'Validade' }
];

const intermOptions = [
    { value: 'INTERMEDIÁRIO', label: 'Intermediário' },
    { value: 'PRAZO', label: 'Prazo' },
    { value: 'CORRENTE', label: 'Fase Corrente' },
    { value: 'F. INTERM.', label: 'F. Interm.' }
];

const destOptions = [
    { value: 'DESTINAÇÃO FINAL', label: 'Destinação Final' },
    { value: 'DESTINAÇÃO', label: 'Destinação' },
    { value: 'DESTINO', label: 'Destino' },
    { value: 'AÇÃO FINAL', label: 'Ação Final' }
];

const barcodeOptions = [
    { value: 'CÓDIGO DE BARRAS', label: 'Código de Barras' },
    { value: 'IDENTIFICADOR', label: 'Identificador' },
    { value: 'PROTOCOLO', label: 'Protocolo' },
    { value: 'CHAVE', label: 'Chave' }
];

let state = {
    mirrors: [],
    currentConfig: { ...defaultMirrorConfig },
    selectedMirrorId: null,
    editContext: { key: null, label: '' }
};

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================

function generateId() {
    return crypto.randomUUID ? crypto.randomUUID() : Date.now().toString() + Math.random().toString(36);
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed; 
        top: 1rem; 
        right: 1rem; 
        background: ${type === 'success' ? '#10b981' : '#ef4444'}; 
        color: white; 
        padding: 0.75rem 1rem;
        border-radius: 0.375rem; 
        z-index: 1100;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
        animation: slideIn 0.2s ease-out;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.2s ease-out';
        setTimeout(() => toast.remove(), 200);
    }, 3000);
}

// ==========================================
// FUNÇÕES DE CONFIGURAÇÃO DE CAMPO
// ==========================================

function getFieldType(fieldKey) {
    const config = state.currentConfig;
    const modelName = config.name;
    
    // Verificar se é um campo que deve ser tratado como classificação baseado na label
    if (fieldKey === 'top_value' || fieldKey === 'title_value' || fieldKey === 'extra_value' || 
        fieldKey === 'line4_value' || fieldKey === 'line5_value' || fieldKey === 'line6_value') {
        
        const labelKey = fieldKey.replace('_value', '_label');
        if (config.customValues && config.customValues[labelKey] === 'CLASSIFICAÇÃO - C12') {
            return FieldType.CLASSIFICATION;
        }
    }
    
    // Verificar se tem força de classificação na configuração
    if (modelName && modelFieldConfigs[modelName] && modelFieldConfigs[modelName][fieldKey]) {
        if (modelFieldConfigs[modelName][fieldKey].forceClassification) {
            return FieldType.CLASSIFICATION;
        }
    }
    
    return fieldTypeMap[fieldKey] || FieldType.TEXT;
}

function initializeFieldConfigs(modelName) {
    if (!modelFieldConfigs[modelName]) {
        modelFieldConfigs[modelName] = {};
    }
    
    const allFields = [
        'top_value', 'title_value', 'extra_value', 'line4_value', 'line5_value',
        'line6_value', 'line7_value', 'line8_value', 'line9_value', 'line10_value',
        'main_text', 'data_1_value', 'data_2_value', 'interm_value', 'dest_value',
        'barcode_value'
    ];
    
    allFields.forEach(field => {
        if (!modelFieldConfigs[modelName][field]) {
            modelFieldConfigs[modelName][field] = { ...defaultFieldConfig };
        }
    });
}

function getFieldConfig(modelName, fieldKey) {
    if (!modelFieldConfigs[modelName]) {
        initializeFieldConfigs(modelName);
    }
    return modelFieldConfigs[modelName][fieldKey] || { ...defaultFieldConfig };
}

function updateFieldConfig(modelName, fieldKey, configChanges) {
    if (!modelFieldConfigs[modelName]) {
        initializeFieldConfigs(modelName);
    }
    modelFieldConfigs[modelName][fieldKey] = {
        ...modelFieldConfigs[modelName][fieldKey],
        ...configChanges
    };
    saveToLocalStorage();
}

// ==========================================
// FUNÇÃO DE FORMATAÇÃO DE CAMPO
// ==========================================

function formatFieldValue(modelName, fieldKey, fieldLabel, rawValue) {
    const config = getFieldConfig(modelName, fieldKey);
    const fieldType = getFieldType(fieldKey);
    
    let value = rawValue || '';
    let displayValue = value;
    let displayLabel = fieldLabel || '';
    
    // Se não tem valor, retorna vazio
    if (!value) {
        return { html: '', shouldRender: false };
    }
    
    // Aplicar caixa alta
    if (config.uppercase) {
        displayValue = displayValue.toUpperCase();
        displayLabel = displayLabel.toUpperCase();
    }
    
    let formattedText = '';
    
    // Formatação específica por tipo de campo
    if (fieldType === FieldType.CLASSIFICATION) {
        // Para classificação, assumimos que o valor pode ser "código|assunto" ou similar
        const parts = displayValue.split('|').map(p => p.trim());
        const code = parts[0] || '';
        const subject = parts[1] || '';
        
        const mode = config.classificationMode || 'both';
        const separatorMap = {
            'pipe': ' | ',
            'comma': ', ',
            'semicolon': '; ',
            'hyphen': ' - ',
            'space': ' '
        };
        const separator = separatorMap[config.classificationSeparator || 'pipe'];
        
        if (mode === 'code') {
            formattedText = code;
        } else if (mode === 'subject') {
            formattedText = subject;
        } else {
            formattedText = code + separator + subject;
        }
        
    } else if (fieldType === FieldType.YEAR) {
        // Para ano, formatamos como ano inicial/ano final
        const mode = config.yearMode || 'both';
        const separator = config.yearSeparator || ' - ';
        
        if (mode === 'initial') {
            formattedText = displayValue;
        } else if (mode === 'final') {
            formattedText = displayValue;
        } else {
            // Se temos os dois anos, espera-se que estejam no formato "ano1-ano2"
            const years = displayValue.split('-').map(y => y.trim());
            formattedText = years.join(separator);
        }
        
    } else {
        // Formatação padrão para texto
        if (!config.showLabel) {
            formattedText = displayValue;
        } else if (config.usePipe) {
            formattedText = `${displayLabel} | ${displayValue}`;
        } else {
            formattedText = `${displayLabel}: ${displayValue}`;
        }
    }
    
    // Aplicar negrito e alinhamento
    const fontWeight = config.bold ? 'bold' : 'normal';
    const textAlign = config.alignment || 'left';
    
    const html = `<span style="font-weight: ${fontWeight}; text-align: ${textAlign}; display: block; width: 100%; word-break: break-word;">${formattedText}</span>`;
    
    return { html, shouldRender: true };
}

// ==========================================
// MODAL DE CONFIGURAÇÃO DE CAMPO - CORRIGIDO
// ==========================================

let currentConfigField = { key: null, label: '', modelName: '' };

function openFieldConfigModal(key, label) {
    const config = state.currentConfig;
    const modelName = config.name;
    currentConfigField = { key, label, modelName };
    
    const modal = document.getElementById('field-config-modal');
    const title = document.getElementById('field-config-title');
    const fieldType = getFieldType(key);
    
    if (!modal) return;
    
    title.textContent = `Configurar: ${label}`;
    
    const fieldConfig = getFieldConfig(modelName, key);
    
    // Elementos do modal
    const basicLayout = document.querySelector('#field-config-modal > div > div > div:nth-child(1)'); // Layout em 2 colunas
    const classificationDiv = document.getElementById('classification-config');
    const yearDiv = document.getElementById('year-config');
    const alignmentDiv = document.querySelector('#field-config-modal > div > div > div:nth-child(4)'); // Alinhamento
    const previewDiv = document.querySelector('#field-config-modal > div > div > div:nth-child(5)'); // Preview
    
    // Esconder tudo primeiro
    if (basicLayout) basicLayout.style.display = 'none';
    if (classificationDiv) classificationDiv.style.display = 'none';
    if (yearDiv) yearDiv.style.display = 'none';
    if (alignmentDiv) alignmentDiv.style.display = 'none';
    if (previewDiv) previewDiv.style.display = 'none';
    
    // Mostrar apenas o necessário baseado no tipo
    if (fieldType === FieldType.CLASSIFICATION) {
        // Apenas classificação e preview
        if (classificationDiv) classificationDiv.style.display = 'block';
        if (previewDiv) previewDiv.style.display = 'block';
        
        // Configurar valores de classificação
        const modeRadios = document.querySelectorAll('input[name="config-classification-mode"]');
        modeRadios.forEach(radio => {
            if (radio.value === (fieldConfig.classificationMode || 'both')) {
                radio.checked = true;
            }
        });
        
        const separatorSelect = document.getElementById('config-classification-separator');
        if (separatorSelect) {
            separatorSelect.value = fieldConfig.classificationSeparator || 'pipe';
        }
        
    } else if (fieldType === FieldType.YEAR) {
        // Apenas ano e preview
        if (yearDiv) yearDiv.style.display = 'block';
        if (previewDiv) previewDiv.style.display = 'block';
        
        // Configurar modo de ano
        const modeRadios = document.querySelectorAll('input[name="config-year-mode"]');
        modeRadios.forEach(radio => {
            if (radio.value === (fieldConfig.yearMode || 'both')) {
                radio.checked = true;
            }
        });
        
        // Configurar separador de anos
        const separatorSelect = document.getElementById('config-year-separator');
        if (separatorSelect) {
            separatorSelect.value = fieldConfig.yearSeparator || ' - ';
        }
        
    } else {
        // Texto normal: layout básico, alinhamento e preview
        if (basicLayout) basicLayout.style.display = 'grid';
        if (alignmentDiv) alignmentDiv.style.display = 'block';
        if (previewDiv) previewDiv.style.display = 'block';
        
        // Configurar valores básicos
        document.getElementById('config-show-label').checked = fieldConfig.showLabel;
        document.getElementById('config-use-pipe').checked = fieldConfig.usePipe;
        document.getElementById('config-uppercase').checked = fieldConfig.uppercase;
        document.getElementById('config-bold').checked = fieldConfig.bold;
    }
    
    // Alinhamento (para todos os tipos, exceto classificação que não precisa)
    const alignmentRadios = document.querySelectorAll('input[name="config-alignment"]');
    alignmentRadios.forEach(radio => {
        if (radio.value === fieldConfig.alignment) {
            radio.checked = true;
        }
    });
    
    setupPreviewListeners();
    updateFieldPreview();
    
    modal.style.display = 'flex';
}

function closeFieldConfigModal() {
    const modal = document.getElementById('field-config-modal');
    if (modal) modal.style.display = 'none';
    currentConfigField = { key: null, label: '', modelName: '' };
}

function setupPreviewListeners() {
    const inputs = [
        'config-show-label',
        'config-use-pipe',
        'config-uppercase',
        'config-bold'
    ];
    
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.removeEventListener('input', updateFieldPreview);
            element.removeEventListener('change', updateFieldPreview);
            element.addEventListener('input', updateFieldPreview);
            element.addEventListener('change', updateFieldPreview);
        }
    });
    
    // Listeners para classificação
    document.querySelectorAll('input[name="config-classification-mode"]').forEach(radio => {
        radio.removeEventListener('change', updateFieldPreview);
        radio.addEventListener('change', updateFieldPreview);
    });
    
    document.getElementById('config-classification-separator')?.addEventListener('change', updateFieldPreview);
    
    // Listeners para ano
    document.querySelectorAll('input[name="config-year-mode"]').forEach(radio => {
        radio.removeEventListener('change', updateFieldPreview);
        radio.addEventListener('change', updateFieldPreview);
    });
    
    document.getElementById('config-year-separator')?.addEventListener('change', updateFieldPreview);
    
    // Alinhamento
    document.querySelectorAll('input[name="config-alignment"]').forEach(radio => {
        radio.removeEventListener('change', updateFieldPreview);
        radio.addEventListener('change', updateFieldPreview);
    });
}

function updateFieldPreview() {
    const preview = document.getElementById('field-config-preview');
    if (!preview) return;
    
    const fieldType = getFieldType(currentConfigField.key);
    
    let previewText = '';
    let style = '';
    
    if (fieldType === FieldType.CLASSIFICATION) {
        // Preview para classificação
        const mode = document.querySelector('input[name="config-classification-mode"]:checked')?.value || 'both';
        const separatorMap = {
            'pipe': ' | ',
            'comma': ', ',
            'semicolon': '; ',
            'hyphen': ' - ',
            'space': ' '
        };
        const separator = separatorMap[document.getElementById('config-classification-separator')?.value || 'pipe'];
        
        if (mode === 'code') {
            previewText = '041.2';
        } else if (mode === 'subject') {
            previewText = 'Assunto da Classificação';
        } else {
            previewText = `041.2${separator}Assunto da Classificação`;
        }
        
    } else if (fieldType === FieldType.YEAR) {
        // Preview para ano
        const mode = document.querySelector('input[name="config-year-mode"]:checked')?.value || 'both';
        const separator = document.getElementById('config-year-separator')?.value || ' - ';
        
        if (mode === 'initial') {
            previewText = '2020';
        } else if (mode === 'final') {
            previewText = '2021';
        } else {
            previewText = `2020${separator}2021`;
        }
        
    } else {
        // Preview para texto normal
        const showLabel = document.getElementById('config-show-label')?.checked || false;
        const usePipe = document.getElementById('config-use-pipe')?.checked || false;
        const uppercase = document.getElementById('config-uppercase')?.checked || false;
        const bold = document.getElementById('config-bold')?.checked || false;
        
        const fieldName = currentConfigField.label || 'Campo';
        
        previewText = '041.2';
        
        if (showLabel) {
            if (usePipe) {
                previewText = `${fieldName} | ${previewText}`;
            } else {
                previewText = `${fieldName}: ${previewText}`;
            }
        }
        
        if (uppercase) {
            previewText = previewText.toUpperCase();
        }
        
        if (bold) style += 'font-weight: bold; ';
    }
    
    // Alinhamento (para todos os tipos)
    const alignment = document.querySelector('input[name="config-alignment"]:checked')?.value || 'left';
    style += `text-align: ${alignment};`;
    
    preview.innerHTML = `<span style="${style}">${previewText}</span>`;
}

function saveFieldConfig() {
    const { key, modelName } = currentConfigField;
    if (!key || !modelName) return;
    
    const fieldType = getFieldType(key);
    
    const config = {
        alignment: document.querySelector('input[name="config-alignment"]:checked')?.value || 'left'
    };
    
    if (fieldType === FieldType.CLASSIFICATION) {
        config.classificationMode = document.querySelector('input[name="config-classification-mode"]:checked')?.value || 'both';
        config.classificationSeparator = document.getElementById('config-classification-separator')?.value || 'pipe';
        config.forceClassification = true;
        config.showLabel = true;
        config.usePipe = true;
        config.uppercase = false;
        config.bold = false;
        
    } else if (fieldType === FieldType.YEAR) {
        config.yearMode = document.querySelector('input[name="config-year-mode"]:checked')?.value || 'both';
        config.yearSeparator = document.getElementById('config-year-separator')?.value || ' - ';
        config.showLabel = false;
        config.usePipe = false;
        config.uppercase = false;
        config.bold = false;
        
    } else {
        config.showLabel = document.getElementById('config-show-label')?.checked || false;
        config.usePipe = document.getElementById('config-use-pipe')?.checked || false;
        config.uppercase = document.getElementById('config-uppercase')?.checked || false;
        config.bold = document.getElementById('config-bold')?.checked || false;
    }
    
    if (!modelFieldConfigs[modelName]) {
        modelFieldConfigs[modelName] = {};
    }
    modelFieldConfigs[modelName][key] = {
        ...modelFieldConfigs[modelName][key],
        ...config
    };
    
    saveToLocalStorage();
    closeFieldConfigModal();
    renderPreview();
    renderForm();
    
    showToast('Configuração do campo aplicada!');
}

// ==========================================
// FUNÇÕES DE PERSISTÊNCIA
// ==========================================

function saveToLocalStorage() {
    const dataToSave = {
        mirrors: state.mirrors,
        fieldConfigs: modelFieldConfigs
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.mirrors = parsed.mirrors || [];
            modelFieldConfigs = parsed.fieldConfigs || {};
        } catch (e) {
            state.mirrors = [];
            modelFieldConfigs = {};
        }
    } else {
        state.mirrors = [];
        modelFieldConfigs = {};
    }

    const modelos = [
        { type: MirrorType.DOCUMENTO_CODIGO, config: codigoUnicoMirrorConfig, name: 'Modelo Código Único' },
        { type: MirrorType.DOCUMENTO_DIRETORIA, config: diretoriaMirrorConfig, name: 'Modelo Diretoria' },
        { type: MirrorType.DOCUMENTO, config: igesMirrorConfig, name: 'Modelo IGES' },
        { type: MirrorType.DOCUMENTO_CODIGO, config: novacapMirrorConfig, name: 'Modelo Novacap' },
        { type: MirrorType.DOCUMENTO_CODIGO, config: mteMirrorConfig, name: 'Modelo MTE' },
        { type: MirrorType.DOCUMENTO_CODIGO, config: cadeMirrorConfig, name: 'Modelo CADE' },
        { type: MirrorType.DOCUMENTO_CODIGO, config: hmabMirrorConfig, name: 'Modelo HMAB' },
        { type: MirrorType.DOCUMENTO, config: homeAssistenceMirrorConfig, name: 'Modelo HOME ASSISTENCE' },
        { type: MirrorType.DOCUMENTO_CODIGO, config: equatorialEnergiaMirrorConfig, name: 'Modelo GRUPO EQUATORIAL ENERGIA' }
    ];

    modelos.forEach(modelo => {
        if (!state.mirrors.some(m => m.name === modelo.name)) {
            state.mirrors.push({
                ...modelo.config,
                id: generateId(),
                customValues: { ...modelo.config.customValues }
            });
        }
    });

    if (!state.selectedMirrorId && state.mirrors.length > 0) {
        state.selectedMirrorId = state.mirrors[0].id;
        state.currentConfig = { ...state.mirrors[0] };
    }

    saveToLocalStorage();
}

// ==========================================
// RENDERIZAÇÃO DO FORMULÁRIO
// ==========================================

function renderPencilButton(key, label) {
    const config = state.currentConfig;
    const modelName = config.name;
    const fieldConfig = getFieldConfig(modelName, key);
    const hasValue = config.customValues[key]?.length > 0;
    
    let btnClass = 'btn-outline';
    if (hasValue) {
        btnClass = 'btn-primary';
    }
    
    const hasCustomConfig = Object.keys(defaultFieldConfig).some(k => {
        if (k === 'classificationMode' || k === 'classificationSeparator' || 
            k === 'yearMode' || k === 'yearSeparator' || k === 'forceClassification') {
            return fieldConfig[k] !== undefined && fieldConfig[k] !== defaultFieldConfig[k];
        }
        return fieldConfig[k] !== defaultFieldConfig[k];
    });
    
    return `
        <button type="button" 
                class="btn ${btnClass}" 
                style="padding: 0.5rem; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; position: relative;" 
                onclick="openFieldConfigModal('${key}', '${label}')" 
                title="Configurar ${label}">
            ⚙️
            ${hasCustomConfig ? 
                '<span style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:#10b981;border-radius:50%;"></span>' : 
                ''}
        </button>
    `;
}

function renderHeaderSelect(lineKey, valueKey) {
    const config = state.currentConfig;
    const values = config.customValues || {};
    const headerOptions = headerLabelOptionsByModel[config.name] || {};
    const options = headerOptions[lineKey] || [];

    if (options.length === 0) return '';

    return `
        <select class="form-input flex-1"
            onchange="handleHeaderLabelChange('${valueKey}', this.value)"
            ${options.length <= 1 ? 'disabled' : ''}>
            ${options.map(opt => `
                <option value="${opt}" ${values[valueKey] === opt ? 'selected' : ''}>
                    ${opt}
                </option>
            `).join('')}
        </select>
    `;
}

function handleHeaderLabelChange(key, value) {
    updateCustomValue(key, value);
    
    if (value === 'CLASSIFICAÇÃO - C12') {
        const valueKey = key.replace('_label', '_value');
        
        const config = state.currentConfig;
        const modelName = config.name;
        
        if (!modelFieldConfigs[modelName]) {
            modelFieldConfigs[modelName] = {};
        }
        if (!modelFieldConfigs[modelName][valueKey]) {
            modelFieldConfigs[modelName][valueKey] = { ...defaultFieldConfig };
        }
        modelFieldConfigs[modelName][valueKey].forceClassification = true;
        
        setTimeout(() => {
            openFieldConfigModal(valueKey, 'Valor da Classificação');
        }, 100);
    }
}

function renderForm() {
    const container = document.getElementById('form-container');
    if (!container) return;

    const config = state.currentConfig;
    const totalHeaderLines = headerLinesByModel[config.name] || 1;
    const values = config.customValues || {};
    const isHomeAssistence = config.name === 'Modelo HOME ASSISTENCE';

    container.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-4">
                <h3 class="section-header">Configuração Geral</h3>
                <input type="text" class="form-input" placeholder="Nome do Modelo (ex: Padrão RH)" 
                       value="${config.name || ''}" oninput="updateConfig('name', this.value)">
                
                <div class="flex items-center justify-between">
                    <div class="checkbox-item">
                        <input type="checkbox" id="includeLogo" ${config.includeLogo ? 'checked' : ''}
                               onchange="updateConfig('includeLogo', this.checked)">
                        <label for="includeLogo">Incluir Logo</label>
                    </div>
                    
                    ${config.includeLogo ? `
                        <div class="flex items-center gap-2">
                            ${config.logoImage ?
                `<img src="${config.logoImage}" style="height:30px; border:1px solid #ccc; border-radius:4px;">
                             <button type="button" class="btn btn-outline btn-sm" onclick="removeLogo()">❌</button>` :
                `<button type="button" class="btn btn-outline btn-sm" onclick="document.getElementById('logoUpload').click()">Selecionar Logo</button>`
            }
                            <input type="file" id="logoUpload" hidden accept="image/*" onchange="handleLogoUpload(event)">
                        </div>
                    ` : ''}
                </div>
            </div>

            <hr style="border-color: var(--color-border);">

            <div class="space-y-3">
                <h3 class="section-header">Cabeçalho</h3>

                ${totalHeaderLines >= 1 ? `
                    <div class="flex gap-2 items-center">
                        ${renderHeaderSelect('top', 'top_label')}
                        ${renderPencilButton('top_value', 'Valor da Linha 1')}
                    </div>` : ''}

                ${totalHeaderLines >= 2 ? `
                    <div class="flex gap-2 items-center">
                        ${renderHeaderSelect('title', 'title_label')}
                        ${renderPencilButton('title_value', 'Valor da Linha 2')}
                    </div>` : ''}

                ${totalHeaderLines >= 3 ? `
                    <div class="flex gap-2 items-center">
                        ${renderHeaderSelect('extra', 'extra_label')}
                        ${renderPencilButton('extra_value', 'Valor da Linha 3')}
                    </div>` : ''}

                ${totalHeaderLines >= 4 ? `
                    <div class="flex gap-2 items-center">
                        ${renderHeaderSelect('line4', 'line4_label')}
                        ${renderPencilButton('line4_value', 'Valor da Linha 4')}
                    </div>` : ''}

                ${totalHeaderLines >= 5 ? `
                    <div class="flex gap-2 items-center">
                        ${renderHeaderSelect('line5', 'line5_label')}
                        ${renderPencilButton('line5_value', 'Valor da Linha 5')}
                    </div>` : ''}

                ${totalHeaderLines >= 6 ? `
                    <div class="flex gap-2 items-center">
                        ${renderHeaderSelect('line6', 'line6_label')}
                        ${renderPencilButton('line6_value', 'Valor da Linha 6')}
                    </div>` : ''}
            </div>

            <hr style="border-color: var(--color-border);">

            <div class="space-y-3">
                <h3 class="section-header">Texto Central</h3>
                <div class="flex gap-2 items-center">
                    <select class="form-input flex-1" disabled style="background-color: #f1f5f9; cursor: default; opacity: 1; color: #334155;">
                        <option selected>Conteúdo do Bloco</option>
                    </select>
                    ${renderPencilButton('main_text', 'Texto Central')}
                </div>
            </div>

            <hr style="border-color: var(--color-border);">

            ${!isHomeAssistence ? `
                <div class="space-y-3">
                    <h3 class="section-header">Rodapé</h3>
                    
                    <div class="grid grid-cols-2 gap-2">
                        <div class="flex gap-1 items-center">
                            <select class="form-input flex-1 text-xs" style="padding: 0 4px;" onchange="updateCustomValue('data_1_label', this.value)">
                                ${data1Options.map(opt => `
                                    <option value="${opt.value}" ${values.data_1_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                                `).join('')}
                            </select>
                            ${renderPencilButton('data_1_value', 'Valor Data 1')}
                        </div>

                        <div class="flex gap-1 items-center">
                            <select class="form-input flex-1 text-xs" style="padding: 0 4px;" onchange="updateCustomValue('data_2_label', this.value)">
                                ${data2Options.map(opt => `
                                    <option value="${opt.value}" ${values.data_2_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                                `).join('')}
                            </select>
                            ${renderPencilButton('data_2_value', 'Valor Data 2')}
                        </div>

                        <div class="flex gap-1 items-center">
                            <select class="form-input flex-1 text-xs" style="padding: 0 4px;" onchange="updateCustomValue('interm_label', this.value)">
                                ${intermOptions.map(opt => `
                                    <option value="${opt.value}" ${values.interm_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                                `).join('')}
                            </select>
                            ${renderPencilButton('interm_value', 'Valor Intermediário')}
                        </div>

                        <div class="flex gap-1 items-center">
                            <select class="form-input flex-1 text-xs" style="padding: 0 4px;" onchange="updateCustomValue('dest_label', this.value)">
                                ${destOptions.map(opt => `
                                    <option value="${opt.value}" ${values.dest_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                                `).join('')}
                            </select>
                            ${renderPencilButton('dest_value', 'Valor Destinação')}
                        </div>

                        <div class="col-span-2 flex gap-2 items-center">
                            <select class="form-input flex-1" onchange="updateCustomValue('barcode_label', this.value)">
                                ${barcodeOptions.map(opt => `
                                    <option value="${opt.value}" ${values.barcode_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                                `).join('')}
                            </select>
                            ${renderPencilButton('barcode_value', 'Valor Código de Barras')}
                        </div>
                    </div>
                </div>
            ` : `
                <div class="space-y-3">
                    <h3 class="section-header">Código de Barras</h3>
                    <div class="flex gap-2 items-center">
                        <select class="form-input flex-1" onchange="updateCustomValue('barcode_label', this.value)">
                            ${barcodeOptions.map(opt => `
                                <option value="${opt.value}" ${values.barcode_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                            `).join('')}
                        </select>
                        ${renderPencilButton('barcode_value', 'Valor Código de Barras')}
                    </div>
                </div>
            `}
        </div>
    `;
}

// ==========================================
// RENDERIZAÇÃO DO PREVIEW
// ==========================================

function renderPreview() {
    const container = document.getElementById('preview-content');
    if (!container) return;
    if (!state.selectedMirrorId) return;

    const config = state.currentConfig;
    const vals = config.customValues || {};
    const modelName = config.name;

    const isCodigoUnico = modelName === 'Modelo Código Único';
    const isDiretoria = modelName === 'Modelo Diretoria';
    const isNovacap = modelName === 'Modelo Novacap';
    const isMTE = modelName === 'Modelo MTE';
    const isCADE = modelName === 'Modelo CADE';
    const isHMAB = modelName === 'Modelo HMAB';
    const isHomeAssistence = modelName === 'Modelo HOME ASSISTENCE';
    const isEquatorialEnergia = modelName === 'Modelo GRUPO EQUATORIAL ENERGIA';
    const isIGES = modelName === 'Modelo IGES';

    const d1 = vals.data_1_value || '';
    const d2 = vals.data_2_value || '';
    const ano = d1 && d2 ? `${d1} - ${d2}` : d1 || d2;

    const labelStyle = "flex: 0 0 100%; max-width: 38%;";

    let logoHtml = '';
    if (config.includeLogo && config.logoImage) {
        if (config.logoImage.startsWith('data:image') || config.logoImage.startsWith('./') || config.logoImage.includes('.png')) {
            logoHtml = `<img src="${config.logoImage}" style="max-height:60px; max-width:100%; object-fit: contain;" alt="Logo">`;
        }
    }

    if (isIGES) {
        const unidadeResult = formatFieldValue(modelName, 'top_value', 'UNIDADE', vals.top_value);
        const numeroCaixaResult = formatFieldValue(modelName, 'title_value', 'Nº CAIXA', vals.title_value);
        const departamentoResult = formatFieldValue(modelName, 'extra_value', 'DEPARTAMENTO', vals.extra_value);
        const tipoDocumentalResult = formatFieldValue(modelName, 'line4_value', 'TIPO DOCUMENTAL', vals.line4_value);
        
        const linhasPaciente = (vals.main_text || '')
            .split('\n')
            .filter(l => l.trim())
            .map(l => formatFieldValue(modelName, 'line6_value', 'PACIENTE', l));

        container.innerHTML = `
            <div style="border:2px solid #000; font-family: Arial, sans-serif; font-size:12px;">
                <div style="border-bottom:2px solid #000; height:80px; display:flex; align-items:center; justify-content:center; padding:10px;">
                    ${logoHtml}
                </div>
                <div style="display:grid; grid-template-columns: 2fr 1fr;">
                    <div style="border-right:2px solid #000; border-bottom:2px solid #000; padding:8px;">
                        ${unidadeResult.shouldRender ? unidadeResult.html : '&nbsp;'}
                    </div>
                    <div style="border-bottom:2px solid #000; padding:8px;">
                        ${numeroCaixaResult.shouldRender ? numeroCaixaResult.html : '&nbsp;'}
                    </div>
                </div>
                <div style="border-bottom:2px solid #000; padding:8px;">
                    ${departamentoResult.shouldRender ? departamentoResult.html : '&nbsp;'}
                </div>
                <div style="display:grid; grid-template-columns: 2fr 1fr;">
                    <div style="border-right:2px solid #000; border-bottom:2px solid #000; padding:8px;">
                        ${tipoDocumentalResult.shouldRender ? tipoDocumentalResult.html : '&nbsp;'}
                    </div>
                    <div style="border-bottom:2px solid #000; padding:8px;">
                        <strong>Código:</strong>
                    </div>
                </div>
                <div style="border-bottom:2px solid #000; padding:8px;">
                    <strong>Conteúdo:</strong>
                </div>
                ${linhasPaciente.map(result => `
                    <div style="border-bottom:2px solid #000; text-align:center; padding:8px;">
                        ${result.shouldRender ? result.html : '&nbsp;'}
                    </div>
                `).join('')}
            </div>
        `;
        return;
    }

    let html = `
        <div class="senac-container">
            <div class="senac-row" style="display:flex;justify-content:center;align-items:center;padding:10px;border-bottom:2px solid #000;min-height:60px;">
                ${logoHtml}
            </div>
    `;

    if (isCodigoUnico || isMTE || isCADE) {
        const result = formatFieldValue(modelName, 'top_value', vals.top_label || 'CÓDIGO', vals.top_value);
        html += `
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">${vals.top_label || 'CÓDIGO'}:</span>
                </div>
                <div class="senac-col-value">
                    ${result.shouldRender ? result.html : '&nbsp;'}
                </div>
            </div>
        `;
    }

    if (isDiretoria || isNovacap) {
        const topResult = formatFieldValue(modelName, 'top_value', vals.top_label || (isDiretoria ? 'DIRETORIA / ORGÃO' : 'DEPARTAMENTO'), vals.top_value);
        const titleResult = formatFieldValue(modelName, 'title_value', vals.title_label || 'CÓDIGO', vals.title_value);
        const extraResult = formatFieldValue(modelName, 'extra_value', vals.extra_label || 'CÓDIGO', vals.extra_value);
        
        html += `
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">${vals.top_label || (isDiretoria ? 'DIRETORIA / ORGÃO' : 'DEPARTAMENTO')}:</span>
                </div>
                <div class="senac-col-value">
                    ${topResult.shouldRender ? topResult.html : '&nbsp;'}
                </div>
            </div>
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">${vals.title_label || 'CÓDIGO'}:</span>
                </div>
                <div class="senac-col-value">
                    ${titleResult.shouldRender ? titleResult.html : '&nbsp;'}
                </div>
            </div>
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">${vals.extra_label || 'CÓDIGO'}:</span>
                </div>
                <div class="senac-col-value">
                    ${extraResult.shouldRender ? extraResult.html : '&nbsp;'}
                </div>
            </div>
        `;
    }

    if (isHMAB) {
        const topResult = formatFieldValue(modelName, 'top_value', 'CÓDIGO', vals.top_value);
        const titleResult = formatFieldValue(modelName, 'title_value', 'CÓDIGO', vals.title_value);
        
        html += `
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">CÓDIGO:</span>
                </div>
                <div class="senac-col-value">
                    ${topResult.shouldRender ? topResult.html : '&nbsp;'}
                </div>
            </div>
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">CÓDIGO:</span>
                </div>
                <div class="senac-col-value">
                    ${titleResult.shouldRender ? titleResult.html : '&nbsp;'}
                </div>
            </div>
        `;
    }

    if (isHomeAssistence) {
        const result = formatFieldValue(modelName, 'top_value', 'CONVÊNIO', vals.top_value);
        html += `
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">CONVÊNIO:</span>
                </div>
                <div class="senac-col-value">
                    ${result.shouldRender ? result.html : '&nbsp;'}
                </div>
            </div>
        `;
    }

    if (isEquatorialEnergia) {
        const topResult = formatFieldValue(modelName, 'top_value', 'CÓDIGO', vals.top_value);
        const titleResult = formatFieldValue(modelName, 'title_value', 'CÓDIGO', vals.title_value);
        const extraResult = formatFieldValue(modelName, 'extra_value', 'CÓDIGO', vals.extra_value);
        const line4Result = formatFieldValue(modelName, 'line4_value', 'CÓDIGO', vals.line4_value);
        const line5Result = formatFieldValue(modelName, 'line5_value', 'CÓDIGO', vals.line5_value);
        
        html += `
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">CÓDIGO:</span>
                </div>
                <div class="senac-col-value">
                    ${topResult.shouldRender ? topResult.html : '&nbsp;'}
                </div>
            </div>
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">CÓDIGO:</span>
                </div>
                <div class="senac-col-value">
                    ${titleResult.shouldRender ? titleResult.html : '&nbsp;'}
                </div>
            </div>
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">CÓDIGO:</span>
                </div>
                <div class="senac-col-value">
                    ${extraResult.shouldRender ? extraResult.html : '&nbsp;'}
                </div>
            </div>
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">CÓDIGO:</span>
                </div>
                <div class="senac-col-value">
                    ${line4Result.shouldRender ? line4Result.html : '&nbsp;'}
                </div>
            </div>
            <div class="senac-row" style="min-height:35px;">
                <div class="senac-col-label" style="${labelStyle}">
                    <span class="senac-label">CÓDIGO:</span>
                </div>
                <div class="senac-col-value">
                    ${line5Result.shouldRender ? line5Result.html : '&nbsp;'}
                </div>
            </div>
        `;
    }

    const mainTextResult = formatFieldValue(modelName, 'main_text', 'TEXTO', vals.main_text);
    html += `
        <div class="senac-row">
            <div class="senac-text-block">
                ${mainTextResult.shouldRender ? mainTextResult.html : '&nbsp;'}
            </div>
        </div>
    `;

    if (!isHomeAssistence) {
        const intermResult = formatFieldValue(modelName, 'interm_value', vals.interm_label || 'INTERMEDIÁRIO', vals.interm_value);
        const destResult = formatFieldValue(modelName, 'dest_value', vals.dest_label || 'DESTINAÇÃO FINAL', vals.dest_value);
        
        html += `
            <div class="senac-row" style="padding:0;display:block;border-bottom:2px solid #000;">
                <table class="senac-footer-table">
                    <tr>
                        <th style="width:25%;">ANO</th>
                        <th colspan="2">RODAPÉ</th>
                    </tr>
                    <tr>
                        <td rowspan="2" style="font-weight:bold;">${ano || '&nbsp;'}</td>
                        <td>${vals.interm_label || 'INTERMEDIÁRIO'}</td>
                        <td>${vals.dest_label || 'DESTINAÇÃO FINAL'}</td>
                    </tr>
                    <tr>
                        <td style="min-height:40px;">${intermResult.shouldRender ? intermResult.html : '&nbsp;'}</td>
                        <td style="min-height:40px;">${destResult.shouldRender ? destResult.html : '&nbsp;'}</td>
                    </tr>
                </table>
            </div>
        `;
    }

    const barcodeResult = formatFieldValue(modelName, 'barcode_value', vals.barcode_label || 'CÓDIGO DE BARRAS', vals.barcode_value);
    html += `
        <div class="senac-barcode-container" style="min-height:80px;">
            ${vals.barcode_value ? `
                <div style="font-family:'Libre Barcode 39';font-size:48px;">*${vals.barcode_value}*</div>
            ` : ''}
            <div style="font-family:monospace;font-size:11px;">
                ${barcodeResult.shouldRender ? barcodeResult.html : '&nbsp;'}
            </div>
        </div>
    </div>`;

    container.innerHTML = html;
}

// ==========================================
// MODAL DE EDIÇÃO DE TEXTO
// ==========================================

function openEditModal(key, label) {
    state.editContext = { key, label };

    const modal = document.getElementById('edit-modal');
    const input = document.getElementById('edit-modal-input');
    const title = document.getElementById('edit-modal-title');

    if (!modal || !input) return;

    title.textContent = `Editar ${label}`;

    if (state.currentConfig.name === 'Modelo IGES' && key === 'line6_value') {
        input.value = state.currentConfig.customValues.main_text || '';
    } else {
        input.value = state.currentConfig.customValues[key] || '';
    }

    modal.style.display = 'flex';
    setTimeout(() => input.focus(), 50);
}

function saveEditModal() {
    const input = document.getElementById('edit-modal-input');
    const { key } = state.editContext;
    if (key) updateCustomValue(key, input.value);
    closeEditModal();
}

function closeEditModal() {
    const modal = document.getElementById('edit-modal');
    if (modal) modal.style.display = 'none';
    state.editContext = { key: null, label: '' };
}

// ==========================================
// ATUALIZAÇÃO DE DADOS
// ==========================================

function updateConfig(key, value) {
    state.currentConfig[key] = value;
    renderForm();
    renderPreview();
}

function updateCustomValue(key, value) {
    if (!state.currentConfig.customValues) {
        state.currentConfig.customValues = {};
    }

    if (state.currentConfig.name === 'Modelo IGES' && key === 'line6_value') {
        state.currentConfig.customValues.main_text = value;
    } else {
        state.currentConfig.customValues[key] = value;
    }

    renderForm();
    renderPreview();
}

function handleLogoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            updateConfig('logoImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

function removeLogo() {
    updateConfig('logoImage', null);
}

// ==========================================
// GESTÃO DA LISTA DE MODELOS
// ==========================================

function renderMirrorList() {
    const container = document.getElementById('mirror-list-container');
    if (!container) return;

    container.innerHTML = `
        <div class="mirror-list-header">
            <span class="section-header">Modelos</span>
            <button type="button" class="action-button" onclick="createNew()" title="Novo Modelo">+</button>
        </div>
        <div class="mirror-list-content">
            ${state.mirrors.length === 0 ?
            '<div class="p-4 text-center text-muted-foreground text-sm">Nenhum modelo salvo</div>' :
            state.mirrors.map(mirror => `
                    <div class="mirror-item ${state.selectedMirrorId === mirror.id ? 'mirror-item-selected' : ''}" 
                         onclick="loadMirror('${mirror.id}')">
                        <div class="mirror-info">
                            <div class="mirror-name">${mirror.name || 'Sem nome'}</div>
                        </div>
                        <button type="button" class="action-button-destructive" onclick="deleteMirror('${mirror.id}', event)">🗑️</button>
                    </div>
                `).join('')
        }
        </div>
    `;
}

function saveMirror() {
    const config = state.currentConfig;
    if (!config.name) {
        showToast('Por favor, dê um nome ao modelo antes de salvar.', 'error');
        return;
    }
    if (!config.id) config.id = generateId();

    const existingIndex = state.mirrors.findIndex(m => m.id === config.id);
    if (existingIndex >= 0) {
        state.mirrors[existingIndex] = { ...config };
    } else {
        state.mirrors.push({ ...config });
    }

    state.selectedMirrorId = config.id;
    saveToLocalStorage();
    renderMirrorList();
    showToast('Modelo salvo com sucesso!');
}

function createNew() {
    state.currentConfig = { 
        ...defaultMirrorConfig, 
        id: '',
        name: 'Novo Modelo',
        customValues: { ...defaultMirrorConfig.customValues } 
    };
    state.selectedMirrorId = null;
    renderMirrorList();
    renderForm();
    renderPreview();
}

function loadMirror(id) {
    const mirror = state.mirrors.find(m => m.id === id);
    if (mirror) {
        state.currentConfig = { ...mirror };
        state.selectedMirrorId = id;
        renderForm();
        renderPreview();
        renderMirrorList();
    }
}

function deleteMirror(id, event) {
    event.stopPropagation();
    if (confirm('Tem certeza que deseja excluir este modelo?')) {
        state.mirrors = state.mirrors.filter(m => m.id !== id);
        if (state.selectedMirrorId === id) {
            if (state.mirrors.length > 0) {
                loadMirror(state.mirrors[0].id);
            } else {
                createNew();
            }
        }
        saveToLocalStorage();
        renderMirrorList();
        showToast('Modelo excluído com sucesso!');
    }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

function init() {
    loadFromLocalStorage();

    document.getElementById('save-button')?.addEventListener('click', saveMirror);
    document.getElementById('default-button')?.addEventListener('click', createNew);
    document.getElementById('print-button')?.addEventListener('click', () => window.print());
    document.getElementById('cancel-button')?.addEventListener('click', () => {
        if (state.selectedMirrorId) {
            loadMirror(state.selectedMirrorId);
        } else {
            createNew();
        }
    });

    document.getElementById('edit-modal')?.addEventListener('click', e => {
        if (e.target.id === 'edit-modal') closeEditModal();
    });

    document.getElementById('field-config-modal')?.addEventListener('click', e => {
        if (e.target.id === 'field-config-modal') closeFieldConfigModal();
    });

    document.getElementById('delete-modal')?.addEventListener('click', e => {
        if (e.target.id === 'delete-modal') document.getElementById('delete-modal').style.display = 'none';
    });

    document.getElementById('delete-cancel')?.addEventListener('click', () => {
        document.getElementById('delete-modal').style.display = 'none';
    });

    renderMirrorList();
    
    if (state.selectedMirrorId) {
        loadMirror(state.selectedMirrorId);
    } else if (state.mirrors.length > 0) {
        loadMirror(state.mirrors[0].id);
    } else {
        createNew();
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.openEditModal = openEditModal;
window.saveEditModal = saveEditModal;
window.closeEditModal = closeEditModal;
window.openFieldConfigModal = openFieldConfigModal;
window.closeFieldConfigModal = closeFieldConfigModal;
window.saveFieldConfig = saveFieldConfig;
window.updateConfig = updateConfig;
window.updateCustomValue = updateCustomValue;
window.handleLogoUpload = handleLogoUpload;
window.removeLogo = removeLogo;
window.saveMirror = saveMirror;
window.createNew = createNew;
window.loadMirror = loadMirror;
window.deleteMirror = deleteMirror;
window.handleHeaderLabelChange = handleHeaderLabelChange;
