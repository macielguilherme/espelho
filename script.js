// ==========================================
// CONFIGURAÇÕES E CONSTANTES
// ==========================================
const STORAGE_KEY = 'docz_mirrors_v11';

const MirrorType = {
    CAIXA: 'caixa',
    DOCUMENTO: 'documento',
    DOCUMENTO_CODIGO: 'documento_codigo',
    AVULSO: 'avulso',
};

const headerLinesByModel = {
    'Modelo 1': 1,
    'Modelo 2': 3,
    'Modelo 3': 5,
    'Modelo 4': 2
};

// Configuração de colunas por modelo
const columnConfigByModel = {
    'Modelo 3': {
        enabled: false, // JÁ ESTÁ false
        maxColumns: 2,
        defaultColumns: 2,
        fieldGroups: []
    },
    'Modelo 2': {
        enabled: false, // JÁ ESTÁ false
        maxColumns: 2,
        defaultColumns: 2,
        fieldGroups: []
    },
    'Modelo 4': {
        enabled: false, // JÁ ESTÁ false
        maxColumns: 2,
        defaultColumns: 2,
        fieldGroups: []
    }
};

// Configuração padrão de colunas
const defaultColumnConfig = {
    enabled: false, // JÁ ESTÁ false
    columnCount: 1,
    maxColumns: 1,
    fieldGroups: []
};

// ==========================================
// CONFIGURAÇÕES DE CAMPO (ATUALIZADO)
// ==========================================

const defaultFieldConfig = {
    usePipe: false, // ALTERADO: de true para false
    uppercase: false, // MANTIDO: false
    bold: false, // MANTIDO: false
    alignment: 'left', // MANTIDO: left
    fontSize: 11, // MANTIDO: 11
    columnLayout: 'single', // MANTIDO: single
    overflowRule: 'wrap', // MANTIDO: wrap
    maxChars: 0, // MANTIDO: 0
    classificationMode: 'both', // MANTIDO: both
    classificationSeparator: 'pipe', // MANTIDO: pipe
    yearMode: 'both', // MANTIDO: both
    yearSeparator: ' - ', // MANTIDO:  - 
    forceClassification: false // MANTIDO: false
};



let modelFieldConfigs = {};

const FieldType = {
    CLASSIFICATION: 'classification',
    YEAR: 'year',
    TEXT: 'text'
};

const fieldTypeMap = {
    'top_value': FieldType.CLASSIFICATION,
    'title_value': FieldType.CLASSIFICATION,
    'extra_value': FieldType.CLASSIFICATION,
    'line4_value': FieldType.CLASSIFICATION,
    'line5_value': FieldType.CLASSIFICATION,
    'line6_value': FieldType.CLASSIFICATION,
    'data_1_value': FieldType.YEAR,
    'data_2_value': FieldType.YEAR,
    'main_text': FieldType.TEXT,
    'interm_value': FieldType.TEXT,
    'dest_value': FieldType.TEXT
};

// ==========================================
// OPÇÕES DE CABEÇALHO
// ==========================================

const headerLabelOptionsByModel = {
    'Modelo 1': {
        top: ['CLASSIFICACAO - C12']
    },
    'Modelo 2': {
        top: ['DEPARTAMENTO - C7'],
        title: ['CLASSIFICACAO - C12'],
        extra: ['CLASSIFICACAO - C12']
    },
    'Modelo 3': {
        top: ['UNIDADE', 'CLASSIFICACAO - C12'],
        title: ['Nº CAIXA', 'CLASSIFICACAO - C12'],
        extra: ['DEPARTAMENTO', 'CLASSIFICACAO - C12'],
        line4: ['TIPO DOCUMENTAL', 'CLASSIFICACAO - C12'],
        line5: ['CODIGO', 'CLASSIFICACAO - C12'],
    },
    'Modelo 4': {
        top: ['DEPARTAMENTO - C7'],
        title: ['CLASSIFICACAO - C12']

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
    logoPosition: 'center',
    logoFit: 'default',
    barcodeSource: 'cliente',
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
        'barcode_value': 'teste'  // ALTERADO DE 'CÓDIGO DE BARRAS' PARA 'teste'
    },
    layoutOption: 2
};

const allowedModelNames = ['Modelo 1', 'Modelo 2', 'Modelo 3', 'Modelo 4'];

const igesMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO,
    name: 'Modelo 3',
    includeLogo: true,
    logoImage: './logo9.png',
    customValues: {
        top_label: 'UNIDADE',
        top_value: 'Unidade: IGESDF-HOSPITAL DE BASE',
        title_label: 'Nº CAIXA',
        title_value: 'Nº Caixa:',
        extra_label: 'DEPARTAMENTO',
        extra_value: 'Departamento:',
        line4_label: 'TIPO DOCUMENTAL',
        line4_value: 'Tipo Documental: Prontuário Médico',
        main_text: 'CID TORRES - 186023\nMARCILENE DA SILVA PINTO - 326023\nMARCIO CASSIANO RODRIGUES - 366023\nVITORIA LAZARA LIMA DO NORTE - 386023\nWESLEY SILVA SANTOS - 396023\nJOSE LEAO DE SOUZA FILHO - 406023\nANTONIO PEREIRA DA SILVA - 416023\nROSIANE DA SILVA DARES - 845923\nANTONIO LAILSON RIBEIRO LIMA - 905923',
        barcode_value: 'Código de Barras'
    }
};

const codigoUnicoMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo 1',
    includeLogo: true,
    logoImage: './logo1.png',
    customValues: {
        top_label: '024.1',
        top_value: 'FOLHAS DE PAGAMENTO. FICHAS FINANCEIRAS',
        title_label: '',
        title_value: '',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '95 ANOS',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '',
        barcode_value: 'Código de Barras'
    }
};

const diretoriaMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_DIRETORIA,
    name: 'Modelo 2',
    includeLogo: true,
    logoImage: './logo2.png',
    customValues: {
        top_label: 'DEPARTAMENTO',
        top_value: 'DAF - Diretoria de Administração Financeira',
        title_label: '023.11',
        title_value: 'FOLHAS DE PAGAMENTO',
        extra_label: '024.11',
        extra_value: 'TESTE DE PAGAMENTO',
        main_text: '',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '2025',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '2026',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '1',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: '5',
        barcode_value: 'Código de Barras'
    }
};

const novacapMirrorConfig = {
    ...defaultMirrorConfig,
    type: MirrorType.DOCUMENTO_CODIGO,
    name: 'Modelo 4',
    includeLogo: true,
    logoImage: './logo3.png',
    customValues: {
        rodape: "lalala",
        top_label: 'DEPARTAMENTO',
        top_value: 'DMED',
        title_label: '026.15',
        title_value: 'PRONTUÁRIOS MÉDICOS',
        main_text: 'MATRÍCULA: 74541-3 | 74549-9 | 74544-8 | 74545-6',
        data_1_label: 'ANO PRODUÇÃO',
        data_1_value: '1998',
        data_2_label: 'ANO DESTINAÇÃO',
        data_2_value: '1998',
        interm_label: 'INTERMEDIÁRIO',
        interm_value: '95 ANOS',
        dest_label: 'DESTINAÇÃO FINAL',
        dest_value: 'ELIMINAÇÃO',
        barcode_value: 'Código de Barras'
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
        barcode_value: 'Código de Barras'
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
        barcode_value: 'Código de Barras'
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
        barcode_value: 'Código de Barras'
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
        barcode_value: 'Código de Barras'
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
        barcode_value: 'Código de Barras'
    }
};

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
    { value: 'ANO PRODUÇÃO', label: 'Ano Produção' }
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

function isPlaceholderText(value) {
    if (!value) return false;
    const normalized = value
        .toString()
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    if (!normalized) return false;
    return normalized === 'sem informacao' || normalized === 'departamento | sem informacao';
}

function normalizeMirrorConfig(config) {
    const merged = {
        ...defaultMirrorConfig,
        ...config,
        logoPosition: config.logoPosition || 'center',
        logoFit: config.logoFit || 'default',
        barcodeSource: config.barcodeSource || 'cliente', // GARANTIR que barcodeSource seja preservado
        customValues: { ...defaultMirrorConfig.customValues, ...(config.customValues || {}) }
    };

    Object.keys(merged.customValues).forEach(key => {
        if (isPlaceholderText(merged.customValues[key])) {
            merged.customValues[key] = '';
        }
    });

    return merged;
}

function getBarcodeDisplayValue(config) {
    // Garantir que barcodeSource existe
    const source = config.barcodeSource || 'cliente';

    console.log('getBarcodeDisplayValue - source:', source); // DEBUG

    if (source === 'sos') {
        return {
            barcode: '12345689',
            display: 'CB002966500002805OS'
        };
    } else {
        return {
            barcode: 'CLI-001',
            display: 'CLI-001'
        };
    }
}

function buildLogoHtml(config) {
    if (!config.includeLogo || !config.logoImage) return '';

    if (!config.logoImage.startsWith('data:image') && !config.logoImage.startsWith('./') && !config.logoImage.includes('.png')) {
        return '';
    }

    const position = config.logoPosition || 'center';
    const fit = config.logoFit || 'default';
    const wrapperClass = `preview-logo-wrapper preview-logo-${position} preview-logo-${fit}`;

    return `
        <div class="${wrapperClass}">
            <div class="preview-logo-box">
                <img src="${config.logoImage}" alt="Logo">
            </div>
        </div>
    `;
}

// ==========================================
// FUNÇÕES DE CONFIGURAÇÃO DE COLUNAS
// ==========================================

function getColumnConfig(modelName) {
    return columnConfigByModel[modelName] || { ...defaultColumnConfig };
}

function updateColumnConfig(modelName, enabled, columnCount, fieldGroups) {
    if (!columnConfigByModel[modelName]) {
        columnConfigByModel[modelName] = {
            enabled,
            maxColumns: Math.max(2, columnCount),
            defaultColumns: columnCount,
            fieldGroups: fieldGroups || []
        };
    } else {
        columnConfigByModel[modelName].enabled = enabled;
        columnConfigByModel[modelName].defaultColumns = columnCount;
        if (fieldGroups) {
            columnConfigByModel[modelName].fieldGroups = fieldGroups;
        }
    }
    saveToLocalStorage();
}

function openColumnConfigModal() {
    const config = state.currentConfig;
    const modelName = config.name;
    const columnConfig = getColumnConfig(modelName);

    const modal = document.getElementById('column-config-modal');
    if (!modal) return;

    document.getElementById('column-enabled').checked = columnConfig.enabled;
    document.getElementById('column-count').value = columnConfig.defaultColumns || 2;
    document.getElementById('column-count').max = columnConfig.maxColumns || 2;

    renderColumnFieldGroups(modelName, columnConfig);

    modal.style.display = 'flex';
}

function closeColumnConfigModal() {
    const modal = document.getElementById('column-config-modal');
    if (modal) modal.style.display = 'none';
}

function renderColumnFieldGroups(modelName, columnConfig) {
    const container = document.getElementById('column-field-groups');
    if (!container) return;

    const config = state.currentConfig;
    const allFields = [];

    if (config.customValues) {
        Object.keys(config.customValues).forEach(key => {
            if (key.endsWith('_value') && key !== 'barcode_value') {
                const labelKey = key.replace('_value', '_label');
                const label = config.customValues[labelKey] || key;
                allFields.push({ key, label });
            }
        });
    }

    if (config.customValues.main_text !== undefined) {
        allFields.push({ key: 'main_text', label: 'Texto Central' });
    }

    let html = `
        <div class="space-y-4">
            <p class="text-sm text-muted-foreground">
                Configure como os campos serão organizados em colunas. Cada grupo representa uma linha.
            </p>
    `;

    const fieldGroups = columnConfig.fieldGroups && columnConfig.fieldGroups.length > 0
        ? columnConfig.fieldGroups
        : [{ fields: [], columns: columnConfig.defaultColumns || 2 }];

    fieldGroups.forEach((group, groupIndex) => {
        html += `
            <div class="column-group" data-group-index="${groupIndex}" style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                    <h5 style="font-weight: 500; margin: 0;">Grupo ${groupIndex + 1}</h5>
                    <div style="display: flex; gap: 8px;">
                        <select class="form-input" style="width: 100px;" 
                                onchange="updateGroupColumns(${groupIndex}, this.value)">
                            <option value="1" ${group.columns === 1 ? 'selected' : ''}>1 Coluna</option>
                            <option value="2" ${group.columns === 2 ? 'selected' : ''}>2 Colunas</option>
                            ${columnConfig.maxColumns >= 3 ? '<option value="3">3 Colunas</option>' : ''}
                            ${columnConfig.maxColumns >= 4 ? '<option value="4">4 Colunas</option>' : ''}
                        </select>
                        <button class="btn btn-outline btn-sm" onclick="removeFieldGroup(${groupIndex})" title="Remover grupo">&#128465;</button>
                    </div>
                </div>
                <div class="column-fields-container" style="display: grid; grid-template-columns: repeat(${group.columns}, 1fr); gap: 8px; min-height: 60px;">
        `;

        for (let col = 0; col < group.columns; col++) {
            const fieldKey = group.fields && group.fields[col] ? group.fields[col] : '';

            html += `
                <div class="column-field-slot" data-group="${groupIndex}" data-col="${col}">
                    <select class="form-input" style="width: 100%;" 
                            onchange="assignFieldToGroup(${groupIndex}, ${col}, this.value)">
                        <option value="">-- Selecione um campo --</option>
                        ${allFields.map(field => `
                            <option value="${field.key}" ${field.key === fieldKey ? 'selected' : ''}>
                                ${field.label}
                            </option>
                        `).join('')}
                    </select>
                </div>
            `;
        }

        html += `</div>`;

        if (group.fields && group.fields.length > 0) {
            html += `<div style="margin-top: 8px; font-size: 12px; color: #64748b;">Campos: ${group.fields.filter(f => f).map(f => allFields.find(af => af.key === f)?.label || f).join(' | ')}</div>`;
        }

        html += `</div>`;
    });

    html += `
        <button class="btn btn-outline btn-sm" onclick="addFieldGroup()" style="margin-top: 8px;">
            + Adicionar Grupo
        </button>
    </div>`;

    container.innerHTML = html;
}

function addFieldGroup() {
    const config = state.currentConfig;
    const modelName = config.name;
    const columnConfig = getColumnConfig(modelName);

    if (!columnConfig.fieldGroups) {
        columnConfig.fieldGroups = [];
    }

    columnConfig.fieldGroups.push({
        fields: [],
        columns: columnConfig.defaultColumns || 2
    });

    renderColumnFieldGroups(modelName, columnConfig);
}

function removeFieldGroup(groupIndex) {
    const config = state.currentConfig;
    const modelName = config.name;
    const columnConfig = getColumnConfig(modelName);

    if (columnConfig.fieldGroups) {
        columnConfig.fieldGroups.splice(groupIndex, 1);
    }

    renderColumnFieldGroups(modelName, columnConfig);
}

function assignFieldToGroup(groupIndex, colIndex, fieldKey) {
    const config = state.currentConfig;
    const modelName = config.name;
    const columnConfig = getColumnConfig(modelName);

    if (!columnConfig.fieldGroups[groupIndex].fields) {
        columnConfig.fieldGroups[groupIndex].fields = [];
    }

    columnConfig.fieldGroups[groupIndex].fields[colIndex] = fieldKey;

    columnConfig.fieldGroups.forEach((group, gIdx) => {
        if (gIdx !== groupIndex && group.fields) {
            group.fields = group.fields.map(f => f === fieldKey ? '' : f);
        }
    });

    renderColumnFieldGroups(modelName, columnConfig);
}

function updateGroupColumns(groupIndex, columns) {
    const config = state.currentConfig;
    const modelName = config.name;
    const columnConfig = getColumnConfig(modelName);

    columns = parseInt(columns);
    columnConfig.fieldGroups[groupIndex].columns = columns;

    const currentFields = columnConfig.fieldGroups[groupIndex].fields || [];
    const newFields = [];
    for (let i = 0; i < columns; i++) {
        newFields[i] = currentFields[i] || '';
    }
    columnConfig.fieldGroups[groupIndex].fields = newFields;

    renderColumnFieldGroups(modelName, columnConfig);
}

function saveColumnConfig() {
    const config = state.currentConfig;
    const modelName = config.name;

    const enabled = document.getElementById('column-enabled').checked;
    const columnCount = parseInt(document.getElementById('column-count').value);

    const fieldGroups = [];
    document.querySelectorAll('.column-group').forEach(groupEl => {
        const columns = parseInt(groupEl.querySelector('select').value);
        const fields = [];

        groupEl.querySelectorAll('.column-field-slot select').forEach(select => {
            fields.push(select.value);
        });

        fieldGroups.push({ fields, columns });
    });

    if (!columnConfigByModel[modelName]) {
        columnConfigByModel[modelName] = {
            enabled,
            maxColumns: Math.max(2, columnCount),
            defaultColumns: columnCount,
            fieldGroups
        };
    } else {
        columnConfigByModel[modelName].enabled = enabled;
        columnConfigByModel[modelName].defaultColumns = columnCount;
        columnConfigByModel[modelName].fieldGroups = fieldGroups;
    }

    saveToLocalStorage();
    closeColumnConfigModal();
    renderPreview();
    renderForm();
    showToast('Configuração de colunas salva!');
}

// ==========================================
// FUNÇÕES DE CONFIGURAÇÃO DE CAMPO
// ==========================================

function getFieldType(fieldKey) {
    const config = state.currentConfig;
    const modelName = config.name;

    if (fieldKey === 'top_value' || fieldKey === 'title_value' || fieldKey === 'extra_value' ||
        fieldKey === 'line4_value' || fieldKey === 'line5_value' || fieldKey === 'line6_value') {

        const labelKey = fieldKey.replace('_value', '_label');
        if (config.customValues && config.customValues[labelKey] === 'CLASSIFICACAO - C12') {
            return FieldType.CLASSIFICATION;
        }
    }

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
        'main_text', 'data_1_value', 'data_2_value', 'interm_value', 'dest_value'
    ];

    allFields.forEach(field => {
        if (!modelFieldConfigs[modelName][field]) {
            modelFieldConfigs[modelName][field] = {
                ...defaultFieldConfig,
                usePipe: false // EXPLÍCITO: false
            };
        } else {
            // Garantir que mesmo os existentes tenham usePipe false
            modelFieldConfigs[modelName][field].usePipe = false;
        }
    });
}

function getFieldConfig(modelName, fieldKey) {
    if (fieldKey === 'barcode_value') {
        return null;
    }

    if (!modelFieldConfigs[modelName]) {
        initializeFieldConfigs(modelName);
    }

    // Garantir que se não existir, retorne com usePipe: false
    const config = modelFieldConfigs[modelName][fieldKey];
    if (!config) {
        return {
            ...defaultFieldConfig,
            usePipe: false
        };
    }

    return config;
}

function updateFieldConfig(modelName, fieldKey, configChanges) {
    if (fieldKey === 'barcode_value') return;

    if (!modelFieldConfigs[modelName]) {
        initializeFieldConfigs(modelName);
    }

    // Garantir que a configuração existente tenha usePipe false se não especificado
    const existingConfig = modelFieldConfigs[modelName][fieldKey] || { ...defaultFieldConfig, usePipe: false };

    modelFieldConfigs[modelName][fieldKey] = {
        ...existingConfig,
        ...configChanges
    };
    saveToLocalStorage();
}

// ==========================================
// FUNÇÃO DE FORMATAÇÃO DE CAMPO
// ==========================================

function formatFieldValue(modelName, fieldKey, fieldLabel, rawValue) {
    if (fieldKey === 'barcode_value') {
        return {
            html: rawValue || '',
            shouldRender: !!rawValue
        };
    }

    const config = getFieldConfig(modelName, fieldKey);

    // FORÇAR usePipe = false para o Modelo 3 campo line6_value
    if (modelName === 'Modelo 3' && fieldKey === 'line6_value') {
        config.usePipe = false;
    }

    const fieldType = getFieldType(fieldKey);

    let value = rawValue || '';
    const trimmedValue = value.trim();
    if (!trimmedValue) {
        return { html: '', shouldRender: false };
    }

    let displayValue = value;
    let displayLabel = fieldLabel || '';

    if (config.uppercase) {
        displayValue = displayValue.toUpperCase();
        displayLabel = displayLabel.toUpperCase();
    }

    let formattedText = '';

    if (fieldType === FieldType.CLASSIFICATION) {
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
        const mode = config.yearMode || 'both';
        const separator = config.yearSeparator || ' - ';

        if (mode === 'initial') {
            formattedText = displayValue;
        } else if (mode === 'final') {
            formattedText = displayValue;
        } else {
            const years = displayValue.split('-').map(y => y.trim());
            formattedText = years.join(separator);
        }

    } else {
        formattedText = displayValue;
    }

    // REMOVIDO: não mostrar mais o nome do campo
    // Apenas usar o pipe se configurado, mas sem o label
    const usePipe = config.usePipe;

    // formattedText já contém o valor formatado
    // Não adicionamos mais o label

    if (config.uppercase) {
        formattedText = formattedText.toUpperCase();
    }

    if (config.maxChars && config.maxChars > 0 && formattedText.length > config.maxChars) {
        if (config.overflowRule === 'truncate') {
            formattedText = formattedText.substring(0, config.maxChars) + '...';
        }
    }

    let overflowStyle = '';
    if (config.overflowRule === 'wrap') {
        overflowStyle = 'white-space: normal; word-wrap: break-word; overflow-wrap: break-word;';
    } else if (config.overflowRule === 'truncate') {
        overflowStyle = 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
    } else if (config.overflowRule === 'reduce-font') {
        overflowStyle = 'white-space: normal; word-wrap: break-word;';
    } else {
        overflowStyle = 'white-space: normal; word-wrap: break-word;';
    }

    const fontWeight = config.bold ? 'bold' : 'normal';
    const textAlign = config.alignment || 'left';
    const fontSize = config.fontSize || 11;

    const html = `<span style="font-size: ${fontSize}px; font-weight: ${fontWeight}; text-align: ${textAlign}; display: block; width: 100%; ${overflowStyle}">${formattedText}</span>`;

    return { html, shouldRender: true };
}

// ==========================================
// MODAL DE CONFIGURAÇÃO DE CAMPO
// ==========================================

let currentConfigField = { key: null, label: '', modelName: '' };

function openFieldConfigModal(key, label) {
    if (key === 'barcode_value') {
        showToast('Campo de código de barras não possui configurações', 'info');
        return;
    }

    const config = state.currentConfig;
    const modelName = config.name;
    currentConfigField = { key, label, modelName };

    const modal = document.getElementById('field-config-modal');
    const title = document.getElementById('field-config-title');

    if (!modal) return;

    title.textContent = `Configuração do Campo`;

    const fieldConfig = getFieldConfig(modelName, key);
    const fieldType = getFieldType(key);


    document.getElementById('config-use-pipe').checked = fieldConfig.usePipe;
    document.getElementById('config-uppercase').checked = fieldConfig.uppercase;
    document.getElementById('config-bold').checked = fieldConfig.bold;

    // NOVO: input numérico para tamanho da fonte
    const fontSizeInput = document.getElementById('config-font-size');
    if (fontSizeInput) {
        fontSizeInput.value = fieldConfig.fontSize || 11;
    }

    const limitCharactersToggle = document.getElementById('config-limit-characters');
    if (limitCharactersToggle) limitCharactersToggle.checked = false;
    const breakLineToggle = document.getElementById('config-break-line');
    if (breakLineToggle) breakLineToggle.checked = false;
    const autoReduceToggle = document.getElementById('config-auto-reduce-font');
    if (autoReduceToggle) autoReduceToggle.checked = false;

    // REMOVA este bloco dos radios de fonte:
    // const fontSizeRadios = document.querySelectorAll('input[name="config-font-size"]');
    // fontSizeRadios.forEach(radio => {
    //     if (radio.value === (fieldConfig.fontSize || 'medium')) {
    //         radio.checked = true;
    //     }
    // });

    const overflowRadios = document.querySelectorAll('input[name="config-overflow-rule"]');
    overflowRadios.forEach(radio => {
        if (radio.value === (fieldConfig.overflowRule || 'wrap')) {
            radio.checked = true;
        }
    });

    const columnLayoutRadios = document.querySelectorAll('input[name="config-column-layout"]');
    columnLayoutRadios.forEach(radio => {
        if (radio.value === (fieldConfig.columnLayout || 'single')) {
            radio.checked = true;
        }
    });

    document.getElementById('config-max-chars').value = fieldConfig.maxChars || 0;

    const alignmentRadios = document.querySelectorAll('input[name="config-alignment"]');
    alignmentRadios.forEach(radio => {
        if (radio.value === fieldConfig.alignment) {
            radio.checked = true;
        }
    });

    const classificationDiv = document.getElementById('classification-config');
    const yearDiv = document.getElementById('year-config');

    if (classificationDiv) classificationDiv.style.display = 'none';
    if (yearDiv) yearDiv.style.display = 'none';

    if (fieldType === FieldType.CLASSIFICATION) {
        if (classificationDiv) classificationDiv.style.display = 'block';

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
        if (yearDiv) yearDiv.style.display = 'block';

        const modeRadios = document.querySelectorAll('input[name="config-year-mode"]');
        modeRadios.forEach(radio => {
            if (radio.value === (fieldConfig.yearMode || 'both')) {
                radio.checked = true;
            }
        });

        const separatorSelect = document.getElementById('config-year-separator');
        if (separatorSelect) {
            separatorSelect.value = fieldConfig.yearSeparator || ' - ';
        }
    }

    setupPreviewListeners();
    updateFieldPreview();
    toggleContentLimitVisibility();

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
        'config-bold',
        'config-font-size', // ADICIONAR esta linha (está faltando!)
        'config-max-chars',
        'config-limit-characters',
        'config-break-line',
        'config-auto-reduce-font',
        'content-limit-input'
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


    // O resto continua igual...
    document.querySelectorAll('input[name="config-overflow-rule"]').forEach(radio => {
        radio.removeEventListener('change', updateFieldPreview);
        radio.addEventListener('change', updateFieldPreview);
    });

    document.querySelectorAll('input[name="config-alignment"]').forEach(radio => {
        radio.removeEventListener('change', updateFieldPreview);
        radio.addEventListener('change', updateFieldPreview);
    });

    document.querySelectorAll('input[name="config-classification-mode"]').forEach(radio => {
        radio.removeEventListener('change', updateFieldPreview);
        radio.addEventListener('change', updateFieldPreview);
    });

    document.getElementById('config-classification-separator')?.addEventListener('change', updateFieldPreview);

    document.querySelectorAll('input[name="config-year-mode"]').forEach(radio => {
        radio.removeEventListener('change', updateFieldPreview);
        radio.addEventListener('change', updateFieldPreview);
    });

    document.getElementById('config-year-separator')?.addEventListener('change', updateFieldPreview);
}

function toggleContentLimitVisibility() {
    const limiter = document.getElementById('config-limit-characters');
    const wrapper = document.getElementById('content-limit-wrapper');
    if (!wrapper) return;
    wrapper.style.display = limiter && limiter.checked ? 'block' : 'none';
}

function updateFieldPreview() {
    const preview = document.getElementById('field-config-preview');
    if (!preview || !currentConfigField.key) return;

    const fieldType = getFieldType(currentConfigField.key);

    const showLabel = document.getElementById('config-show-label')?.checked || false;
    const usePipe = document.getElementById('config-use-pipe')?.checked || false;
    const uppercase = document.getElementById('config-uppercase')?.checked || false;
    const bold = document.getElementById('config-bold')?.checked || false;

    const fontSize = parseInt(document.getElementById('config-font-size')?.value) || 11;
    const overflowRule = document.querySelector('input[name="config-overflow-rule"]:checked')?.value || 'wrap';
    const maxChars = parseInt(document.getElementById('config-max-chars')?.value) || 0;

    const fieldName = currentConfigField.label || 'Campo';

    let previewText = '';
    let style = '';

    // Gerar texto de preview baseado no tipo do campo
    if (fieldType === FieldType.CLASSIFICATION) {
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
        previewText = 'Texto de exemplo para preview';
    }

    // Aplicar label se necessário
    if (showLabel) {
        if (usePipe) {
            previewText = `${fieldName} | ${previewText}`;
        } else {
            previewText = `${fieldName}: ${previewText}`;
        }
    }

    // Aplicar caixa alta
    if (uppercase) {
        previewText = previewText.toUpperCase();
    }

    // Aplicar limite de caracteres
    if (maxChars > 0 && previewText.length > maxChars) {
        if (overflowRule === 'truncate') {
            previewText = previewText.substring(0, maxChars) + '...';
        }
    }

    // Construir estilos CSS
    if (bold) style += 'font-weight: bold; ';
    style += `font-size: ${fontSize}px; `;

    // Aplicar regras de overflow
    if (overflowRule === 'truncate') {
        style += 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
    } else if (overflowRule === 'wrap') {
        style += 'white-space: normal; word-wrap: break-word; overflow-wrap: break-word;';
    } else if (overflowRule === 'reduce-font') {
        style += 'white-space: normal; word-wrap: break-word;';
    } else {
        style += 'white-space: normal; word-wrap: break-word;';
    }

    // Aplicar alinhamento
    const alignment = document.querySelector('input[name="config-alignment"]:checked')?.value || 'left';
    style += `text-align: ${alignment};`;

    // Atualizar o preview
    preview.innerHTML = `<span style="${style}">${previewText}</span>`;
}

function saveFieldConfig() {
    if (!currentConfigField.key) {
        showToast('Nenhum campo selecionado', 'error');
        return;
    }

    const { key, label, modelName } = currentConfigField;

    // Coletar configurações básicas
    const configChanges = {

        usePipe: document.getElementById('config-use-pipe')?.checked || false,
        uppercase: document.getElementById('config-uppercase')?.checked || false,
        bold: document.getElementById('config-bold')?.checked || false,
        fontSize: parseInt(document.getElementById('config-font-size')?.value) || 11,
        alignment: document.querySelector('input[name="config-alignment"]:checked')?.value || 'left',
        columnLayout: document.querySelector('input[name="config-column-layout"]:checked')?.value || 'single',
        overflowRule: document.querySelector('input[name="config-overflow-rule"]:checked')?.value || 'wrap',
        maxChars: parseInt(document.getElementById('config-max-chars')?.value) || 0,
    };

    // Adicionar configurações específicas de CLASSIFICAÇÃO
    const fieldType = getFieldType(key);
    if (fieldType === FieldType.CLASSIFICATION) {
        configChanges.classificationMode = document.querySelector('input[name="config-classification-mode"]:checked')?.value || 'both';
        configChanges.classificationSeparator = document.getElementById('config-classification-separator')?.value || 'pipe';
    }

    // Adicionar configurações específicas de ANO
    if (fieldType === FieldType.YEAR) {
        configChanges.yearMode = document.querySelector('input[name="config-year-mode"]:checked')?.value || 'both';
        configChanges.yearSeparator = document.getElementById('config-year-separator')?.value || ' - ';
    }

    // Salvar as configurações
    updateFieldConfig(modelName, key, configChanges);

    // Fechar o modal
    closeFieldConfigModal();

    // Atualizar a interface
    renderForm();
    renderPreview();

    // Mostrar confirmação
    showToast(`Configurações de "${label}" salvas com sucesso!`);
}



// ==========================================
// FUNÇÕES DE PERSISTÊNCIA
// ==========================================

function saveToLocalStorage() {
    const dataToSave = {
        mirrors: state.mirrors,
        fieldConfigs: modelFieldConfigs,
        columnConfigs: columnConfigByModel
    };

    // Garantir que o currentConfig esteja atualizado nos mirrors
    if (state.selectedMirrorId) {
        const index = state.mirrors.findIndex(m => m.id === state.selectedMirrorId);
        if (index >= 0) {
            state.mirrors[index] = { ...state.currentConfig };
        }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.mirrors = (parsed.mirrors || []).map(normalizeMirrorConfig);

            // NORMALIZAR configurações de campo carregadas
            if (parsed.fieldConfigs) {
                modelFieldConfigs = {};
                Object.keys(parsed.fieldConfigs).forEach(modelName => {
                    modelFieldConfigs[modelName] = {};
                    Object.keys(parsed.fieldConfigs[modelName]).forEach(fieldKey => {
                        // Garantir que usePipe seja false se não estiver definido
                        // e que todas as configurações tenham valores padrão consistentes
                        modelFieldConfigs[modelName][fieldKey] = {
                            ...defaultFieldConfig,
                            usePipe: false, // FORÇAR false para manter padrão
                            ...parsed.fieldConfigs[modelName][fieldKey]
                        };

                        // Garantir que campos de classificação tenham forceClassification false por padrão
                        if (fieldKey === 'top_value' || fieldKey === 'title_value' ||
                            fieldKey === 'extra_value' || fieldKey === 'line4_value' ||
                            fieldKey === 'line5_value' || fieldKey === 'line6_value') {

                            // Se não tiver forceClassification definido, manter false
                            if (modelFieldConfigs[modelName][fieldKey].forceClassification === undefined) {
                                modelFieldConfigs[modelName][fieldKey].forceClassification = false;
                            }
                        }
                    });
                });
            } else {
                modelFieldConfigs = {};
            }

            // Filtrar apenas modelos permitidos (RN15 - Padronização de Modelos)
            state.mirrors = state.mirrors.filter(m => allowedModelNames.includes(m.name));

            // Carregar configurações de colunas
            if (parsed.columnConfigs) {
                Object.assign(columnConfigByModel, parsed.columnConfigs);

                // Garantir que enabled seja false em todas as colunas por padrão
                Object.keys(columnConfigByModel).forEach(key => {
                    if (columnConfigByModel[key]) {
                        columnConfigByModel[key].enabled = false;

                        // Garantir que fieldGroups exista
                        if (!columnConfigByModel[key].fieldGroups) {
                            columnConfigByModel[key].fieldGroups = [];
                        }

                        // Garantir valores padrão para outras propriedades
                        columnConfigByModel[key].maxColumns = columnConfigByModel[key].maxColumns || 2;
                        columnConfigByModel[key].defaultColumns = columnConfigByModel[key].defaultColumns || 2;
                    }
                });
            }

        } catch (e) {
            console.error('Erro ao carregar dados do localStorage:', e);
            state.mirrors = [];
            modelFieldConfigs = {};
        }
    } else {
        // Se não há dados salvos, inicializar vazio
        state.mirrors = [];
        modelFieldConfigs = {};
    }

    // RN15 - Padronizacao de Modelos: manter apenas modelos predefinidos no prototipo.
    // Garantir que os modelos padrão existam
    const modelosPadrao = [
        { type: MirrorType.DOCUMENTO_CODIGO, config: codigoUnicoMirrorConfig, name: 'Modelo 1' },
        { type: MirrorType.DOCUMENTO_DIRETORIA, config: diretoriaMirrorConfig, name: 'Modelo 2' },
        { type: MirrorType.DOCUMENTO, config: igesMirrorConfig, name: 'Modelo 3' },
        { type: MirrorType.DOCUMENTO_CODIGO, config: novacapMirrorConfig, name: 'Modelo 4' }
    ];

    // Adicionar modelos padrão se não existirem
    modelosPadrao.forEach(modelo => {
        if (!state.mirrors.some(m => m.name === modelo.name)) {
            const novoModelo = normalizeMirrorConfig({
                ...modelo.config,
                id: generateId(),
                customValues: { ...modelo.config.customValues }
            });

            // Garantir que o novo modelo tenha configurações de campo com usePipe: false
            const modelName = modelo.name;
            if (!modelFieldConfigs[modelName]) {
                modelFieldConfigs[modelName] = {};

                // Inicializar campos do modelo com usePipe: false
                const campos = [
                    'top_value', 'title_value', 'extra_value', 'line4_value',
                    'line5_value', 'line6_value', 'main_text', 'data_1_value',
                    'data_2_value', 'interm_value', 'dest_value'
                ];

                campos.forEach(campo => {
                    modelFieldConfigs[modelName][campo] = {
                        ...defaultFieldConfig,
                        usePipe: false
                    };
                });
            }



            state.mirrors.push(novoModelo);
        }
    });

    // Selecionar o primeiro modelo se nenhum estiver selecionado
    if (!state.selectedMirrorId && state.mirrors.length > 0) {
        state.selectedMirrorId = state.mirrors[0].id;
        state.currentConfig = normalizeMirrorConfig(state.mirrors[0]);
    }

    // Garantir que as configurações de campo existam para o modelo atual
    if (state.selectedMirrorId) {
        const currentModel = state.mirrors.find(m => m.id === state.selectedMirrorId);
        if (currentModel && !modelFieldConfigs[currentModel.name]) {
            modelFieldConfigs[currentModel.name] = {};

            // Inicializar campos do modelo atual
            const campos = [
                'top_value', 'title_value', 'extra_value', 'line4_value',
                'line5_value', 'line6_value', 'main_text', 'data_1_value',
                'data_2_value', 'interm_value', 'dest_value'
            ];

            campos.forEach(campo => {
                modelFieldConfigs[currentModel.name][campo] = {
                    ...defaultFieldConfig,
                    usePipe: false
                };
            });
        }
    }

    // RN18 - Politica de Transicao: espelhos antigos continuam funcionando; 
    // novo modelo vale para novos espelhos ou quando editados.
    // Salvar estado normalizado de volta para o localStorage
    saveToLocalStorage();
}

// ==========================================
// RENDERIZAÇÃO DO FORMULÁRIO
// ==========================================

function renderPencilButton(key, label) {
    // Caso especial para o código de barras
    if (key === 'barcode_value') {
        return `
            <button type="button" 
                    class="btn btn-outline" 
                    style="padding: 0.5rem; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center;" 
                    onclick="openBarcodeConfigModal()" 
                    title="Configuração do Campo">
                &#9881;
            </button>
        `;
    }

    // Caso especial para o campo intermediário
    if (key === 'interm_value') {
        const config = state.currentConfig;
        const modelName = config.name;
        const fieldConfig = getFieldConfig(modelName, key);
        const hasValue = config.customValues[key]?.length > 0;

        // MODIFICADO: Sempre usar btn-outline (transparente), removido btn-primary
        let btnClass = 'btn-outline';

        const hasCustomConfig = Object.keys(defaultFieldConfig).some(k => {
            if (k === 'classificationMode' || k === 'classificationSeparator' ||
                k === 'yearMode' || k === 'yearSeparator' ||
                k === 'fontSize' || k === 'overflowRule' || k === 'maxChars') {
                return fieldConfig[k] !== undefined && fieldConfig[k] !== defaultFieldConfig[k];
            }
            return fieldConfig[k] !== defaultFieldConfig[k];
        });

        return `
        <button type="button" 
                class="btn ${btnClass}" 
                style="padding: 0.5rem; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; position: relative;" 
                onclick="openFieldConfigModal('${key}', '${label}')" 
                title="Configuração do Campo">
            &#9881;
            ${hasCustomConfig ?
                '<span style="position:absolute;top:-2px;right:-2px;width:8px;height:8px;background:#10b981;border-radius:50%;"></span>' :
                ''}
        </button>
    `;
    }

    const config = state.currentConfig;
    const modelName = config.name;
    const fieldConfig = getFieldConfig(modelName, key);
    const hasValue = config.customValues[key]?.length > 0;

    // MODIFICADO: Sempre usar btn-outline (transparente), removida a lógica que alternava para btn-primary
    let btnClass = 'btn-outline';

    const hasCustomConfig = Object.keys(defaultFieldConfig).some(k => {
        if (k === 'classificationMode' || k === 'classificationSeparator' ||
            k === 'yearMode' || k === 'yearSeparator' ||
            k === 'fontSize' || k === 'overflowRule' || k === 'maxChars') {
            return fieldConfig[k] !== undefined && fieldConfig[k] !== defaultFieldConfig[k];
        }
        return fieldConfig[k] !== defaultFieldConfig[k];
    });

    return `
        <button type="button" 
                class="btn ${btnClass}" 
                style="padding: 0.5rem; width: 42px; height: 42px; display: flex; align-items: center; justify-content: center; position: relative;" 
                onclick="openFieldConfigModal('${key}', '${label}')" 
                title="Configuração do Campo">
            &#9881;
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

    if (value === 'CLASSIFICACAO - C12') {
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
    const hideTemporalidade = config.name === 'Modelo HOME ASSISTENCE' || config.name === 'Modelo 3';
    const columnConfig = getColumnConfig(config.name);

    container.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-4">
                <h3 class="section-header">Bloco Superior</h3>
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
                             <button type="button" class="btn btn-outline btn-sm" onclick="removeLogo()">&times;</button>` :
                `<button type="button" class="btn btn-outline btn-sm" onclick="document.getElementById('logoUpload').click()">Selecionar Logo</button>`
            }
                            <input type="file" id="logoUpload" hidden accept="image/*" onchange="handleLogoUpload(event)">
                        </div>
                    ` : ''}
                </div>

                ${config.includeLogo ? `
                    <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 12px;">
                        <div>
                            <label class="form-label" style="margin-bottom: 8px; display: block;">Posição da logo:</label>
                            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                                <label class="radio-item">
                                    <input type="radio" name="config-logo-position" value="left" ${config.logoPosition === 'left' ? 'checked' : ''} onchange="updateConfig('logoPosition', this.value)"> Esquerda
                                </label>
                                <label class="radio-item">
                                    <input type="radio" name="config-logo-position" value="center" ${(!config.logoPosition || config.logoPosition === 'center') ? 'checked' : ''} onchange="updateConfig('logoPosition', this.value)"> Centro
                                </label>
                                <label class="radio-item">
                                    <input type="radio" name="config-logo-position" value="right" ${config.logoPosition === 'right' ? 'checked' : ''} onchange="updateConfig('logoPosition', this.value)"> Direita
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="form-label" style="margin-bottom: 8px; display: block;">Modo de exibição:</label>
                            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                                <label class="radio-item">
                                    <input type="radio" name="config-logo-fit" value="default" ${(!config.logoFit || config.logoFit === 'default') ? 'checked' : ''} onchange="updateConfig('logoFit', this.value)"> Espaço padrão
                                </label>
                                <label class="radio-item">
                                    <input type="radio" name="config-logo-fit" value="fill" ${config.logoFit === 'fill' ? 'checked' : ''} onchange="updateConfig('logoFit', this.value)"> Preencher espaço disponível
                                </label>
                            </div>
                        </div>
                    </div>
                ` : ''}

                

                ${columnConfig.maxColumns > 1 ? `
                    <div style="margin-top: 16px; padding: 12px; background: #f8fafc; border-radius: 6px; border: 1px solid #e2e8f0;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <strong>Modo Colunas</strong>
                                <p class="text-xs text-muted-foreground">Este modelo suporta exibição em colunas</p>
                            </div>
                            <button class="btn btn-outline btn-sm" onclick="openColumnConfigModal()">&#9881; Configurar Colunas</button>
                        </div>
                    </div>
                ` : ''}
            </div>

            <hr style="border-color: var(--color-border);">

            <div class="space-y-3">
                <h3 class="section-header">Bloco Secundário</h3>

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
                <h3 class="section-header">Bloco Central</h3>
                <div class="flex gap-2 items-center">
                    <select class="form-input flex-1" disabled style="background-color: #f1f5f9; cursor: default; opacity: 1; color: #334155;">
                        <option selected>Conteúdo do Bloco</option>
                    </select>
                    ${renderPencilButton('main_text', 'Texto Central')}
                </div>
            </div>

            <hr style="border-color: var(--color-border);">

            ${!hideTemporalidade ? `
                <div class="space-y-3">
                    <h3 class="section-header">Bloco da Temporalidade</h3>
                    
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
                    </div>
                </div>
                
                <hr style="border-color: var(--color-border);">
            ` : ''}

            <div class="space-y-3">
                <h3 class="section-header">Bloco de Identificação</h3>
                <div style="display: flex; gap: 8px; align-items: center;">
                    <div class="form-input" style="background-color: #f1f5f9; cursor: default; opacity: 1; color: #334155; display: flex; align-items: center; height: 2.5rem; padding: 0.5rem 0.75rem; border-radius: 0.375rem; border: 1px solid #e2e8f0; flex: 1;">
                        Código de Barras
                    </div>
                    ${renderPencilButton('barcode_value', 'Código de Barras')}
                </div>
            </div>

        </div>
    `;
}

// ==========================================
// RENDERIZAÇÃO DO PREVIEW COM COLUNAS
// RN14 - O espelho sera renderizado via estrutura HTML dinamica baseada nas configuracoes definidas na interface.
// ==========================================

function getColumnLayoutClass(modelName) {
    const modelConfigs = modelFieldConfigs[modelName] || {};
    const priority = [
        'main_text',
        'interm_value',
        'dest_value',
        'data_1_value',
        'data_2_value',
        'top_value',
        'title_value',
        'extra_value',
        'line4_value',
        'line5_value',
        'line6_value'
    ];

    for (const key of priority) {
        if (modelConfigs[key]?.columnLayout) {
            return mapColumnLayoutClass(modelConfigs[key].columnLayout);
        }
    }

    const anyConfig = Object.values(modelConfigs).find(cfg => cfg.columnLayout);
    return mapColumnLayoutClass(anyConfig?.columnLayout || 'single');
}

function mapColumnLayoutClass(layout) {
    if (layout === 'two-columns') return 'layout-two-columns';
    if (layout === 'three-columns') return 'layout-three-columns';
    return 'layout-single';
}

function renderPreviewWithColumns() {
    const container = document.getElementById('preview-content');
    if (!container) return;

    const config = state.currentConfig;
    const modelName = config.name;
    const columnConfig = getColumnConfig(modelName);
    const vals = config.customValues || {};

    const logoHtml = buildLogoHtml(config);
    const layoutClass = getColumnLayoutClass(modelName);

    let html = `
        <div class="senac-container preview-mirror" style="border:2px solid #000; font-family: Arial, sans-serif; font-size:12px;">
            <div style="display:flex;align-items:center;padding:10px;border-bottom:2px solid #000;min-height:60px;">
                ${logoHtml}
            </div>
            <div class="preview-field-layout ${layoutClass}">
    `;

    columnConfig.fieldGroups.forEach((group, groupIndex) => {
        const columns = group.columns || 2;

        html += `<div style="display: grid; grid-template-columns: repeat(${columns}, 1fr); border-bottom: 2px solid #000;">`;

        for (let i = 0; i < columns; i++) {
            const fieldKey = group.fields && group.fields[i] ? group.fields[i] : null;

            if (fieldKey) {
                let fieldLabel = '';
                if (fieldKey === 'main_text') {
                    fieldLabel = 'TEXTO';
                } else {
                    const labelKey = fieldKey.replace('_value', '_label');
                    fieldLabel = vals[labelKey] || fieldKey;
                }

                const result = formatFieldValue(modelName, fieldKey, fieldLabel, vals[fieldKey]);

                html += `
                    <div style="padding: 8px; min-height: 35px; ${i < columns - 1 ? 'border-right: 2px solid #000;' : ''}">
                        ${result.shouldRender ? result.html : '&nbsp;'}
                    </div>
                `;
            } else {
                html += `
                    <div style="padding: 8px; min-height: 35px; ${i < columns - 1 ? 'border-right: 2px solid #000;' : ''}">
                        &nbsp;
                    </div>
                `;
            }
        }

        html += `</div>`;
    });
    html += `</div>`;

    // RODAPÉ NO FORMATO SOLICITADO
    if (!(modelName === 'Modelo HOME ASSISTENCE')) {
        const d1 = vals.data_1_value || '';
        const d2 = vals.data_2_value || '';
        const ano = d1 && d2 ? `${d1} - ${d2}` : d1 || d2;

        const intermResult = formatFieldValue(modelName, 'interm_value', vals.interm_label || 'INTERMEDIÁRIO', vals.interm_value);
        const destResult = formatFieldValue(modelName, 'dest_value', vals.dest_label || 'DESTINAÇÃO FINAL', vals.dest_value);

        html += `
            <div style="border-bottom:2px solid #000;">
                <table style="width:100%; border-collapse: collapse; font-size:12px; text-align:left;">                    <!-- Linha do cabecalho -->
                    <tr>
                        <th style="width:25%; border-right:2px solid #000; border-bottom:2px solid #000; padding:6px;">ANO</th>
                        <th colspan="2" style="border-bottom:2px solid #000; padding:6px;">${ano}</th>
                    </tr>
                    
                    <!-- Linha dos sub-titulos -->
                    <tr>
                        <td style="border-right:2px solid #000; border-bottom:2px solid #000; padding:6px;" rowspan="3">${ano || '&nbsp;'}</td>
                        <th style="border-right:2px solid #000; border-bottom:2px solid #000; padding:6px;"><b>INTERMEDIARIO</b></th>
                        <th style="border-bottom:2px solid #000; padding:6px;"><b>DESTINACAO FINAL</b></th>
                    </tr>
                    <tr>
                        <td style="border-right:2px solid #000; padding:6px; min-height:40px;">${intermResult.shouldRender ? intermResult.html : ""}</td>
                        <td style="padding:6px; min-height:40px;">${destResult.shouldRender ? destResult.html : ""}</td>
                    </tr>
                    <tr>
                        <td style="border-right:2px solid #000; padding:6px; min-height:40px;">&nbsp;</td>
                        <td style="padding:6px; min-height:40px;">&nbsp;</td>
                    </tr>
                </table>
            </div>
        `;
    }

    const barcodeData = getBarcodeDisplayValue(config);
    html += `
    <div style="text-align:center; padding:10px; min-height:80px;">
        <div style="font-family:'Libre Barcode 39';font-size:48px; margin-bottom:5px;">*${barcodeData.barcode}*</div>
        <div style="font-family:monospace;font-size:14px; font-weight: bold;">${barcodeData.display}</div>
    </div>
`;

    container.innerHTML = html;
}

// ==========================================
// RENDERIZAÇÃO DO PREVIEW (ORIGINAL)
// ==========================================

function renderPreview() {
    const container = document.getElementById('preview-content');
    if (!container) return;
    if (!state.selectedMirrorId) return;

    const config = state.currentConfig;
    const modelName = config.name;
    const columnConfig = getColumnConfig(modelName);

    if (columnConfig.enabled && columnConfig.fieldGroups && columnConfig.fieldGroups.length > 0) {
        renderPreviewWithColumns();
        return;
    }

    const vals = config.customValues || {};

    const isCodigoUnico = modelName === 'Modelo 1';
    const isDiretoria = modelName === 'Modelo 2';
    const isNovacap = modelName === 'Modelo 4';
    const isMTE = modelName === 'Modelo MTE';
    const isCADE = modelName === 'Modelo CADE';
    const isHMAB = modelName === 'Modelo HMAB';
    const isHomeAssistence = modelName === 'Modelo HOME ASSISTENCE';
    const isEquatorialEnergia = modelName === 'Modelo GRUPO EQUATORIAL ENERGIA';
    const isIGES = modelName === 'Modelo 3';

    const d1 = vals.data_1_value || '';
    const d2 = vals.data_2_value || '';
    const ano = d1 && d2 ? `${d1} - ${d2}` : d1 || d2;

    const labelStyle = "flex: 0 0 100%; max-width: 38%;";

    const logoHtml = buildLogoHtml(config);
    const layoutClass = getColumnLayoutClass(modelName);

    if (isIGES) {
        const unidadeResult = formatFieldValue(modelName, 'top_value', 'UNIDADE', vals.top_value);
        const numeroCaixaResult = formatFieldValue(modelName, 'title_value', 'Nº CAIXA', vals.title_value);
        const departamentoResult = formatFieldValue(modelName, 'extra_value', 'DEPARTAMENTO', vals.extra_value);
        const tipoDocumentalResult = formatFieldValue(modelName, 'line4_value', 'TIPO DOCUMENTAL', vals.line4_value);

        const linhasPaciente = (vals.main_text || '')
            .split('\n')
            .filter(l => l.trim())
            .map(l => formatFieldValue(modelName, 'line6_value', 'PACIENTE', l));

        const barcodeData = getBarcodeDisplayValue(config);
        container.innerHTML = `
            <div class="preview-mirror" style="border:2px solid #000; font-family: Arial, sans-serif; font-size:12px;">
                <div style="border-bottom:2px solid #000; height:80px; display:flex; align-items:center; padding:10px;">
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
                
                <!-- Código de barras para IGES -->
                <div style="text-align:center; padding:10px; min-height:80px;">
        <div style="font-family:'Libre Barcode 39';font-size:48px; margin-bottom:5px;">*${barcodeData.barcode}*</div>
        <div style="font-family:monospace;font-size:14px; font-weight: bold;">${barcodeData.display}</div>
    </div>
        `;
        return;
    }

    let html = `
        <div class="senac-container preview-mirror" style="border:2px solid #000; font-family: Arial, sans-serif; font-size:12px;">
            <div style="display:flex;align-items:center;padding:10px;border-bottom:2px solid #000;min-height:60px;">
                ${logoHtml}
            </div>
            <div class="preview-field-layout ${layoutClass}">
    `;

    if (isCodigoUnico || isMTE || isCADE) {
        const result = formatFieldValue(modelName, 'top_value', vals.top_label || 'CÓDIGO', vals.top_value);
        html += `
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    ${vals.top_label || 'CÓDIGO'}:
                </div>
                <div style="flex:1; padding:8px;">
                    ${result.shouldRender ? result.html : '&nbsp;'}
                </div>
            </div>
        `;
    }

    if (isDiretoria) {
        const topResult = formatFieldValue(modelName, 'top_value', vals.top_label || 'DIRETORIA / ORGÃO', vals.top_value);
        const titleResult = formatFieldValue(modelName, 'title_value', vals.title_label || 'CÓDIGO', vals.title_value);
        const extraResult = formatFieldValue(modelName, 'extra_value', vals.extra_label || 'CÓDIGO', vals.extra_value);

        html += `
        <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
            <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                ${vals.top_label || 'DIRETORIA / ORGÃO'}:
            </div>
            <div style="flex:1; padding:8px;">
                ${topResult.shouldRender ? topResult.html : '&nbsp;'}
            </div>
        </div>
        <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
            <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                ${vals.title_label || 'CÓDIGO'}:
            </div>
            <div style="flex:1; padding:8px;">
                ${titleResult.shouldRender ? titleResult.html : '&nbsp;'}
            </div>
        </div>
        <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
            <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                ${vals.extra_label || 'CÓDIGO'}:
            </div>
            <div style="flex:1; padding:8px;">
                ${extraResult.shouldRender ? extraResult.html : '&nbsp;'}
            </div>
        </div>
        
    `;
    }

    if (isNovacap) {
        const topResult = formatFieldValue(modelName, 'top_value', vals.top_label || 'DEPARTAMENTO', vals.top_value);
        const titleResult = formatFieldValue(modelName, 'title_value', vals.title_label || 'CÓDIGO', vals.title_value);

        html += `
        <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
            <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                ${vals.top_label || 'DEPARTAMENTO'}:
            </div>
            <div style="flex:1; padding:8px;">
                ${topResult.shouldRender ? topResult.html : '&nbsp;'}
            </div>
        </div>
        <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
            <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                ${vals.title_label || 'CÓDIGO'}:
            </div>
            <div style="flex:1; padding:8px;">
                ${titleResult.shouldRender ? titleResult.html : '&nbsp;'}
            </div>
        </div>
    `;
    }

    if (isHMAB) {
        const topResult = formatFieldValue(modelName, 'top_value', 'CÓDIGO', vals.top_value);
        const titleResult = formatFieldValue(modelName, 'title_value', 'CÓDIGO', vals.title_value);

        html += `
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    CÓDIGO:
                </div>
                <div style="flex:1; padding:8px;">
                    ${topResult.shouldRender ? topResult.html : '&nbsp;'}
                </div>
            </div>
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    CÓDIGO:
                </div>
                <div style="flex:1; padding:8px;">
                    ${titleResult.shouldRender ? titleResult.html : '&nbsp;'}
                </div>
            </div>
        `;
    }

    if (isHomeAssistence) {
        const result = formatFieldValue(modelName, 'top_value', 'CONVÊNIO', vals.top_value);
        html += `
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    CONVÊNIO:
                </div>
                <div style="flex:1; padding:8px;">
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
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    CÓDIGO:
                </div>
                <div style="flex:1; padding:8px;">
                    ${topResult.shouldRender ? topResult.html : '&nbsp;'}
                </div>
            </div>
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    CÓDIGO:
                </div>
                <div style="flex:1; padding:8px;">
                    ${titleResult.shouldRender ? titleResult.html : '&nbsp;'}
                </div>
            </div>
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    CÓDIGO:
                </div>
                <div style="flex:1; padding:8px;">
                    ${extraResult.shouldRender ? extraResult.html : '&nbsp;'}
                </div>
            </div>
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    CÓDIGO:
                </div>
                <div style="flex:1; padding:8px;">
                    ${line4Result.shouldRender ? line4Result.html : '&nbsp;'}
                </div>
            </div>
            <div style="display:flex; border-bottom:2px solid #000; min-height:35px;">
                <div style="flex:0 0 38%; border-right:2px solid #000; padding:8px; font-weight:bold;">
                    CÓDIGO:
                </div>
                <div style="flex:1; padding:8px;">
                    ${line5Result.shouldRender ? line5Result.html : '&nbsp;'}
                </div>
            </div>
        `;
    }

    html += `</div>`;

    const mainTextResult = formatFieldValue(modelName, 'main_text', 'TEXTO', vals.main_text);
    html += `
    <div style="border-bottom:2px solid #000; padding:8px; min-height:200px; text-align: center;">
        ${mainTextResult.shouldRender ? mainTextResult.html : '&nbsp;'}
    </div>
`;

    // RODAPÉ - Apenas código de barras para Modelo 3 e Modelo 4
    if (!isHomeAssistence) {
        // NÃO RENDERIZA A TABELA DE RODAPÉ PARA MODELOS 3 E 4
        if (modelName !== 'Modelo 3' && modelName !== 'Modelo 4') {
            const intermResult = formatFieldValue(modelName, 'interm_value', vals.interm_label || 'INTERMEDIÁRIO', vals.interm_value);
            const destResult = formatFieldValue(modelName, 'dest_value', vals.dest_label || 'DESTINAÇÃO FINAL', vals.dest_value);

            let nomeRodape = "RODAPÉ";
            if (modelName === 'Modelo 1') nomeRodape = "PRAZO DE GUARDA";
            else if (modelName === 'Modelo 2') nomeRodape = "PRAZO DE GUARDA";

            html += `
<div style="border-bottom:2px solid #000;">
    <table style="width:100%; border-collapse: collapse; font-size:12px; text-align:left;">
        <tr>
            <th style="width:25%; border-right:2px solid #000; border-bottom:2px solid #000; padding:3px;">ANO</th>
            <th colspan="2" style="border-bottom:2px solid #000; padding:3px;">${nomeRodape}</th>
        </tr>
        <tr>
            <td style="border-right:2px solid #000; border-bottom:2px solid #000; padding:3px;" rowspan="3">${ano || '&nbsp;'}</td>
            <th style="border-right:2px solid #000; border-bottom:2px solid #000; padding:3px;"><b>INTERMEDIARIO</b></th>
            <th style="border-bottom:2px solid #000; padding:3px;"><b>DESTINACAO FINAL</b></th>
        </tr>
        <tr>
            <td style="border-right:2px solid #000; padding:3px; min-height:20px;">${intermResult.shouldRender ? intermResult.html : ""}</td>
            <td style="padding:3px; min-height:20px;">${destResult.shouldRender ? destResult.html : ""}</td>
        </tr>
        <tr>
            <td style="border-right:2px solid #000; padding:3px; min-height:20px;">&nbsp;</td>
            <td style="padding:3px; min-height:20px;">&nbsp;</td>
        </tr>
    </table>
</div>
`;
        }
    }

    const barcodeData = getBarcodeDisplayValue(config);
    html += `
    <div style="text-align:center; padding:10px; min-height:80px;">
        <div style="font-family:'Libre Barcode 39';font-size:48px; margin-bottom:5px;">*${barcodeData.barcode}*</div>
        <div style="font-family:monospace;font-size:14px; font-weight: bold;">${barcodeData.display}</div>
    </div>
`;

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

    if (state.currentConfig.name === 'Modelo 3' && key === 'line6_value') {
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

    // IMPORTANTE: Salvar no localStorage imediatamente
    saveToLocalStorage();

    renderForm();
    renderPreview();
}

function updateCustomValue(key, value) {
    if (!state.currentConfig.customValues) {
        state.currentConfig.customValues = {};
    }

    if (state.currentConfig.name === 'Modelo 3' && key === 'line6_value') {
        state.currentConfig.customValues.main_text = value;
    } else {
        state.currentConfig.customValues[key] = value;
    }

    renderForm();
    renderPreview();

    saveToLocalStorage();
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
                        <button type="button" class="action-button-destructive" onclick="deleteMirror('${mirror.id}', event)">&#128465;</button>
                    </div>
                `).join('')
        }
        </div>
    `;
}

function saveMirror() {
    const config = state.currentConfig;
    if (!config.name) {
        showToast('Por favor, d� um nome ao modelo antes de salvar.', 'error');
        return;
    }
    if (!allowedModelNames.includes(config.name)) {
        showToast('Apenas modelos predefinidos podem ser salvos.', 'error');
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
    if (state.mirrors.length > 0) {
        showToast('Selecione um dos modelos predefinidos para editar.', 'error');
        loadMirror(state.mirrors[0].id);
        return;
    }

    state.currentConfig = normalizeMirrorConfig({
        ...defaultMirrorConfig,
        id: '',
        name: 'Modelo 1',
        customValues: { ...defaultMirrorConfig.customValues }
    });
    state.selectedMirrorId = null;
    renderMirrorList();
    renderForm();
    renderPreview();
}

function loadMirror(id) {
    const mirror = state.mirrors.find(m => m.id === id);
    if (mirror) {
        state.currentConfig = normalizeMirrorConfig(mirror);
        state.selectedMirrorId = id;

        // DEBUG: Verificar qual valor está sendo carregado
        console.log('Carregando mirror:', mirror.name);
        console.log('barcodeSource carregado:', mirror.barcodeSource);

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

    document.getElementById('column-config-modal')?.addEventListener('click', e => {
        if (e.target.id === 'column-config-modal') closeColumnConfigModal();
    });

    document.getElementById('delete-modal')?.addEventListener('click', e => {
        if (e.target.id === 'delete-modal') document.getElementById('delete-modal').style.display = 'none';
    });

    document.getElementById('config-limit-characters')?.addEventListener('change', toggleContentLimitVisibility);

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

// ==========================================
// MODAL DE CONFIGURAÇÃO DO CÓDIGO DE BARRAS
// ==========================================

function openBarcodeConfigModal() {
    const modal = document.getElementById('barcode-config-modal');
    if (!modal) return;

    const config = state.currentConfig;
    const currentSource = config.barcodeSource || 'cliente';

    // Selecionar o radio button correto
    const radios = document.querySelectorAll('input[name="modal-barcode-source"]');
    radios.forEach(radio => {
        if (radio.value === currentSource) {
            radio.checked = true;
        }
    });

    // Atualizar preview
    updateBarcodePreview();

    modal.style.display = 'flex';
}

function closeBarcodeConfigModal() {
    const modal = document.getElementById('barcode-config-modal');
    if (modal) modal.style.display = 'none';
}

function updateBarcodePreview() {
    const preview = document.getElementById('barcode-config-preview');
    if (!preview) return;

    const selectedSource = document.querySelector('input[name="modal-barcode-source"]:checked')?.value || 'cliente';

    if (selectedSource === 'sos') {
        // SOS: código diferente para scanner e texto
        preview.innerHTML = `
            <div style="font-family:'Libre Barcode 39';font-size:36px; margin-bottom:5px;">*1234*</div>
            <div style="font-family:monospace;font-size:14px; font-weight: bold; margin-bottom:2px;">CB002966500002805OS</div>
            
        `;
    } else {
        // Cliente: CLI-001 para ambos
        preview.innerHTML = `
            <div style="font-family:'Libre Barcode 39';font-size:36px; margin-bottom:5px;">*CLI-001*</div>
            <div style="font-family:monospace;font-size:11px;">CLI-001</div>
        `;
    }
}

function saveBarcodeConfig() {
    const selectedSource = document.querySelector('input[name="modal-barcode-source"]:checked')?.value || 'cliente';

    // Atualizar a configuração - USAR updateConfig que já salva no localStorage
    updateConfig('barcodeSource', selectedSource);

    // Fechar o modal
    closeBarcodeConfigModal();

    // Mostrar toast de confirmação
    showToast('Configuração do código de barras salva!');

    // Forçar uma atualização do preview
    renderPreview();
}

// Adicionar listener para atualizar preview quando mudar a seleção
document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="modal-barcode-source"]');
    radios.forEach(radio => {
        radio.addEventListener('change', updateBarcodePreview);
    });
});

// ==========================================
// FUNÇÃO PARA LIMPAR LOCALSTORAGE
// ==========================================
function clearLocalStorage() {
    if (confirm('Tem certeza que deseja limpar todo o cache? Isso irá resetar todas as configurações para o padrão.')) {
        localStorage.removeItem(STORAGE_KEY);
        showToast('Cache limpo! A página será recarregada.', 'success');
        setTimeout(() => {
            location.reload();
        }, 1500);
    }
}



// ==========================================
// EXPORTAÇÃO DAS FUNÇÕES PARA O ESCOPO GLOBAL
// ==========================================

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

// Funções de colunas
window.openColumnConfigModal = openColumnConfigModal;
window.closeColumnConfigModal = closeColumnConfigModal;
window.saveColumnConfig = saveColumnConfig;
window.addFieldGroup = addFieldGroup;
window.removeFieldGroup = removeFieldGroup;
window.assignFieldToGroup = assignFieldToGroup;
window.updateGroupColumns = updateGroupColumns;

// Adicione estas linhas na seção de exportação de funções
window.openBarcodeConfigModal = openBarcodeConfigModal;
window.closeBarcodeConfigModal = closeBarcodeConfigModal;
window.saveBarcodeConfig = saveBarcodeConfig;

// Exportar a função
window.clearLocalStorage = clearLocalStorage;


