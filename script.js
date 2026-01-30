// Constantes e Configurações
const STORAGE_KEY = 'docz_mirrors_v2'; 

// Tipos
const MirrorType = {
    CAIXA: 'caixa',
    DOCUMENTO: 'documento',
    AVULSO: 'avulso'
};

// Configuração Padrão
const defaultMirrorConfig = {
    id: '',
    name: '',
    type: MirrorType.CAIXA,
    includeLogo: true,
    logoImage: null,
    logoSize: 2,
    
    // Valores customizados vazios
    customValues: {
        'code_field': '', 
        'top_label': 'SETOR', 
        'top_value': '',      
        'title_label': 'TÍTULO', 
        'title_value': '',       
        'main_text': '',         
        'ano': '',
        'interm': '',
        'dest': '',
        'barcode': ''
    },
    
    layoutOption: 2
};

// Opções em Português
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

// Estado da Aplicação
let state = {
    mirrors: [],
    currentConfig: { ...defaultMirrorConfig },
    selectedMirrorId: null,
    isEditing: false,
    mirrorToDelete: null
};

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================

function generateId() {
    return crypto.randomUUID ? crypto.randomUUID() : Date.now().toString();
}

function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.mirrors));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try { state.mirrors = JSON.parse(saved); } catch (e) { state.mirrors = []; }
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = `toast toast-success`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed; top: 1rem; right: 1rem;
        background: #10b981; color: white; padding: 0.75rem 1rem;
        border-radius: 0.375rem; z-index: 1000;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==========================================
// RENDERIZAÇÃO DO FORMULÁRIO (Configurações)
// ==========================================

function renderForm() {
    const container = document.getElementById('form-container');
    if (!container) return;

    const config = state.currentConfig;
    const values = config.customValues || {};

    container.innerHTML = `
        <div class="space-y-6">
            <div class="space-y-4">
                <h3 class="section-header">Configuração Geral</h3>
                <input type="text" class="form-input" placeholder="Nome do Modelo (ex: Padrão RH)" 
                       value="${config.name}" oninput="updateConfig('name', this.value)">
                
                <div class="checkbox-item">
                    <input type="checkbox" id="includeLogo" ${config.includeLogo ? 'checked' : ''}
                           onchange="updateConfig('includeLogo', this.checked)">
                    <label for="includeLogo">Incluir Logo</label>
                </div>

                ${config.includeLogo ? `
                    <div class="upload-area">
                        ${config.logoImage ? 
                            `<div class="flex items-center gap-3">
                                <img src="${config.logoImage}" style="height:40px;">
                                <button class="btn btn-outline btn-sm" onclick="removeLogo()">Remover</button>
                             </div>` : 
                             // MUDANÇA AQUI: De Upload Logo para Selecionar Logo
                            `<button class="btn btn-outline btn-sm" onclick="document.getElementById('logoUpload').click()">Selecionar Logo</button>`
                        }
                        <input type="file" id="logoUpload" hidden accept="image/*" onchange="handleLogoUpload(event)">
                    </div>
                ` : ''}
            </div>

            <hr style="border-color: var(--color-border);">

            <div class="space-y-4">
                <h3 class="section-header">Cabeçalho</h3>
                
                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <label class="text-xs font-bold text-muted-foreground">Rótulo Linha 1</label>
                        <select class="form-input" onchange="updateCustomValue('top_label', this.value)">
                            ${labelOptions.map(opt => `
                                <option value="${opt.value}" ${values.top_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                            `).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="text-xs font-bold text-muted-foreground">Valor Linha 1</label>
                        <input type="text" class="form-input" value="${values.top_value || ''}" 
                               placeholder="Ex: FACULDADE SENAC"
                               oninput="updateCustomValue('top_value', this.value)">
                    </div>
                </div>

                <div>
                    <label class="text-xs font-bold text-muted-foreground">Código Numérico (Bloco Esquerdo)</label>
                    <input type="text" class="form-input" value="${values.code_field || ''}" 
                           placeholder="Ex: 000"
                           oninput="updateCustomValue('code_field', this.value)">
                </div>

                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <label class="text-xs font-bold text-muted-foreground">Rótulo Título</label>
                        <select class="form-input" onchange="updateCustomValue('title_label', this.value)">
                            ${titleOptions.map(opt => `
                                <option value="${opt.value}" ${values.title_label === opt.value ? 'selected' : ''}>${opt.label}</option>
                            `).join('')}
                        </select>
                    </div>
                    <div>
                        <label class="text-xs font-bold text-muted-foreground">Valor Título</label>
                        <input type="text" class="form-input" value="${values.title_value || ''}" 
                               placeholder="Ex: ADM GERAL"
                               oninput="updateCustomValue('title_value', this.value)">
                    </div>
                </div>
            </div>

            <hr style="border-color: var(--color-border);">

            <div class="space-y-4">
                <h3 class="section-header">Texto Central</h3>
                <textarea class="form-input" style="height: 100px; resize: vertical;" 
                          placeholder="Cole o texto descritivo aqui..."
                          oninput="updateCustomValue('main_text', this.value)">${values.main_text || ''}</textarea>
            </div>

            <hr style="border-color: var(--color-border);">

            <div class="space-y-4">
                <h3 class="section-header">Tabela de Prazos</h3>
                
                <div class="grid grid-cols-2 gap-2">
                    <div>
                        <label class="text-xs font-bold text-muted-foreground">Ano / Período</label>
                        <input type="text" class="form-input" value="${values.ano || ''}" 
                               placeholder="Ex: 2024"
                               oninput="updateCustomValue('ano', this.value)">
                    </div>
                    <div>
                        <label class="text-xs font-bold text-muted-foreground">Prazo Intermediário</label>
                        <input type="text" class="form-input" value="${values.interm || ''}" 
                               placeholder="Ex: ."
                               oninput="updateCustomValue('interm', this.value)">
                    </div>
                    <div class="col-span-2">
                        <label class="text-xs font-bold text-muted-foreground">Destinação Final</label>
                        <input type="text" class="form-input" value="${values.dest || ''}" 
                               placeholder="Ex: GUARDA PERMANENTE"
                               oninput="updateCustomValue('dest', this.value)">
                    </div>
                </div>
            </div>

            <div class="space-y-4">
                <h3 class="section-header">Rodapé</h3>
                <div>
                    <label class="text-xs font-bold text-muted-foreground">Código de Barras</label>
                    <input type="text" class="form-input" value="${values.barcode || ''}" 
                           placeholder="Digite o código"
                           oninput="updateCustomValue('barcode', this.value)">
                </div>
            </div>

        </div>
    `;
}

// ==========================================
// RENDERIZAÇÃO DO PREVIEW (Visualização)
// ==========================================

function renderPreview() {
    const container = document.getElementById('preview-content');
    if (!container) return;

    const config = state.currentConfig;
    const vals = config.customValues || {};

    const data = {
        topLabel: vals.top_label || 'SETOR',
        topValue: vals.top_value || '', 
        code: vals.code_field || '',    
        titleLabel: vals.title_label || 'TÍTULO',
        titleValue: vals.title_value || '', 
        text: vals.main_text || '',     
        ano: vals.ano || '',
        interm: vals.interm || '',
        dest: vals.dest || '',
        barcode: vals.barcode || ''
    };

    container.innerHTML = `
        <div class="senac-container">
            
            <div class="senac-row" style="justify-content: center; padding: 10px; border-bottom: 1px solid #000; min-height: 60px;">
                ${config.includeLogo && config.logoImage ? 
                    `<img src="${config.logoImage}" style="max-height: 50px; object-fit: contain;">` : 
                    '' 
                }
            </div>

            <div class="senac-row" style="min-height: 35px;">
                <div class="senac-col-label">
                    <span class="senac-label">${data.topLabel}:</span>
                </div>
                <div class="senac-col-value">
                    <span class="senac-value">${data.topValue}</span>
                </div>
            </div>

            <div class="senac-row" style="min-height: 35px;">
                <div class="senac-col-label" style="justify-content: center;">
                    <span class="senac-value">${data.code}</span>
                </div>
                <div class="senac-col-value">
                    <span class="senac-value">${data.titleValue}</span>
                </div>
            </div>

            <div class="senac-row">
                <div class="senac-text-block">
                    ${data.text ? data.text : ''}
                </div>
            </div>

            <div class="senac-row" style="padding: 0; display: block; border-bottom: 1px solid #000;">
                <table class="senac-footer-table">
                    <tr>
                        <th style="width: 25%;">ANO</th>
                        <th colspan="2">PRAZO DE GUARDA</th>
                    </tr>
                    <tr>
                        <td rowspan="2" style="vertical-align: middle; height: 50px;">${data.ano}</td>
                        <td style="width: 37.5%;">INTERMEDIÁRIO</td>
                        <td style="width: 37.5%;">DESTINAÇÃO FINAL</td>
                    </tr>
                    <tr>
                        <td style="height: 40px; vertical-align: middle;">${data.interm}</td>
                        <td style="height: 40px; vertical-align: middle;">${data.dest}</td>
                    </tr>
                </table>
            </div>

            <div class="senac-barcode-container" style="min-height: 80px;">
                ${data.barcode ? `
                    <div style="font-family: 'Libre Barcode 39', monospace; font-size: 48px; height: 40px; overflow: hidden; white-space: nowrap;">
                        *${data.barcode}*
                    </div>
                    <div style="font-family: monospace; font-size: 11px; letter-spacing: 1px; margin-top: 5px;">
                        ${data.barcode}
                    </div>
                ` : ''}
            </div>

        </div>
    `;
}

// ==========================================
// FUNÇÕES DE LÓGICA E DADOS
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
    state.currentConfig.customValues[key] = value;
    renderPreview(); // Atualiza em tempo real
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
// GESTÃO DA LISTA (Salvar, Novo, Excluir)
// ==========================================

function renderMirrorList() {
    const container = document.getElementById('mirror-list-container');
    if (!container) return;

    // Cabeçalho da Lista
    container.innerHTML = `
        <div class="mirror-list-header">
            <span class="section-header">Meus Espelhos</span>
            <button class="action-button" onclick="createNew()" title="Novo Espelho">+</button>
        </div>
        <div class="mirror-list-content">
            ${state.mirrors.length === 0 ? 
                '<div class="p-4 text-center text-muted-foreground text-sm">Nenhum espelho salvo</div>' : 
                state.mirrors.map(mirror => `
                    <div class="mirror-item ${state.selectedMirrorId === mirror.id ? 'mirror-item-selected' : ''}" 
                         onclick="loadMirror('${mirror.id}')">
                        <div class="mirror-info">
                            <div class="mirror-name">${mirror.name || 'Sem nome'}</div>
                        </div>
                        <button class="action-button-destructive" onclick="deleteMirror('${mirror.id}', event)">🗑️</button>
                    </div>
                `).join('')
            }
        </div>
    `;
}

function saveMirror() {
    const config = state.currentConfig;
    if (!config.name) {
        alert("Por favor, dê um nome ao espelho antes de salvar.");
        return;
    }

    if (!config.id) config.id = generateId();

    const existingIndex = state.mirrors.findIndex(m => m.id === config.id);
    if (existingIndex >= 0) {
        state.mirrors[existingIndex] = config;
    } else {
        state.mirrors.push(config);
    }

    state.selectedMirrorId = config.id;
    saveToLocalStorage();
    renderMirrorList();
    showToast("Espelho salvo com sucesso!");
}

function createNew() {
    state.currentConfig = { ...defaultMirrorConfig, customValues: {}, id: '' };
    state.selectedMirrorId = null;
    renderForm();
    renderPreview();
    renderMirrorList();
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
    event.stopPropagation(); // Evita carregar o espelho ao clicar em deletar
    if(confirm("Tem certeza que deseja excluir?")) {
        state.mirrors = state.mirrors.filter(m => m.id !== id);
        if(state.selectedMirrorId === id) createNew();
        saveToLocalStorage();
        renderMirrorList();
    }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

function init() {
    loadFromLocalStorage();
    
    // Listeners dos botões principais
    document.getElementById('save-button')?.addEventListener('click', saveMirror);
    document.getElementById('default-button')?.addEventListener('click', createNew); // Botão Padrão agora cria Novo
    document.getElementById('print-button')?.addEventListener('click', () => window.print());
    document.getElementById('cancel-button')?.addEventListener('click', () => {
        if(state.selectedMirrorId) loadMirror(state.selectedMirrorId);
        else createNew();
    });

    renderMirrorList();
    renderForm();
    renderPreview();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
